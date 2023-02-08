//Components
import Search from "./Components/Search";
import Country from "./Components/Country";
import CountryInfo from "./Components/CountryInfo";
import Filter from "./Components/Filter";
import Navbar from "./Components/Navbar";
//React hooks
import { useState, useEffect, useRef } from "react";
//Context
import { ThemeContext } from "./helper/Context";

//Routing
import { Route, Routes, useNavigate } from "react-router-dom";
//Misc.
import Loader from "./Components/Loader";
import "./App.css";

function App() {
  //STATE
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //Ref
  const regionRef = useRef();

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  //Sets state using data and disables loading afterwards
  const fetchData = async () => {
    const res = await fetch("https://restcountries.com/v2/all");
    const data = await res.json();
   
    setCountries(data);
    setLoading(false);
  };
  //Navigation for the router
  function handleClick(id) {
    navigate(`/${id}`);
  }
  //Theme toggling function
  const toggle = () => {
    setMode((prev) => !prev);
  };

  //SEARCHING AND FILTERING FUNCTIONS
  //Search
  function Change(e) {
    setQuery(e.target.value);
  }
  //Filtering
  const regionSelector = () => {
    const selected = regionRef.current.value;
    if (selected.trim()) {
      const fetchSelected = async () => {
        const res = await fetch(
          `https://restcountries.com/v2/region/${selected}`
        );
        const data = await res.json();
        if (selected === "All") {
          try {
            fetchData();
          } catch (error) {
            console.log(error);
          }
          return;
        }

        setCountries(data);
      };
      try {
        fetchSelected();
      } catch (error) {
        console.log(error);
      }
    }
  };
  //Generates instances of the country component.
  const renderCountries = countries
    .filter((country) =>
      country.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((country) => {
      return (
        <Country
          key={country.numericCode}
          id={country.numericCode}
          name={country.name}
          flag={country.flag}
          capital={country.capital}
          population={country.population}
          region={country.region}
          handleClick={handleClick}
        />
      );
    });

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="Home">
                <div className="Home--container">
                  <Search change={Change} Queryvalue={query} />
                  <Filter handleChange={regionSelector} ref={regionRef} />
                </div>

                {loading ? (
                  <Loader />
                ) : (
                  <div className="countries">{renderCountries}</div>
                )}
                <style>{`body{background-color:${
                  mode ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)"
                }`}</style>
              </div>
            }
          ></Route>
          <Route
            path="/:id"
            element={
              <div>
                <CountryInfo countries={countries} />
                <style>{`body{background-color:${
                  mode ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)"
                }`}</style>
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
