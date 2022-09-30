import { useParams, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../hooks/useTheme";

export default function CountryInfo({ countries }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const navigateBack = () => {
    navigate(`/`);
  };
  const { mode } = useTheme();
  //Styling
  const style = {
    backgroundColor: mode ? "hsl(0 0% 100%)" : "hsl(209 23% 22%)",
    color: mode ? "black" : "white",
  };
  //variables
  let name;
  let native; //native name
  let population;
  let region;
  let sub; //sub-region
  let capital;
  let domain; //top level domain
  let currencies = [];
  let languages = [];
  let borders;
  let flag;

  countries.forEach((country) => {
    if (country.numericCode === id) {
      name = country.name;
      native = country.nativeName;
      population = country.population;
      region = country.region;
      sub = country.subregion;
      capital = country.capital;
      domain = country.topLevelDomain;
      flag = country.flag;
      borders = country.borders;

      country?.currencies?.forEach((currency) =>
        currencies.push(currency.name)
      );
      country?.languages?.forEach((language) => languages.push(language.name));
    }
  });
  return (
    <div className="CountryInfo">
      <div className="back-btn" onClick={navigateBack} style={style}>
        <FontAwesomeIcon icon={faArrowLeft} alt="arrow" className="arrow" />
        Back
      </div>
      <div className="info" style={{ color: mode ? "black" : "white" }}>
        <img src={flag} alt="flag" className="flag"></img>
        <div className="info--text">
          <h2 className="country-name">{name}</h2>
          <div className="column1">
            <p>
              <span className="span-label">Native Name:</span>
              {native}
            </p>
            <p>
              <span className="span-label">Population:</span>
              {population}
            </p>
            <p>
              <span className="span-label">Region:</span>
              {region}
            </p>
            <p>
              <span className="span-label">Sub Region:</span>
              {sub}
            </p>
            <p>
              <span className="span-label">Capital:</span>
              {capital}
            </p>
          </div>
          <div className="column2">
            <p>
              <span className="span-label">Top Level Domain:</span>
              {domain}
            </p>
            <p>
              <span className="span-label">Currencies:</span>
              {currencies.map((currency) => {
                if (currencies.indexOf(currency) !== currencies.length - 1) {
                  return <span key={nanoid()}>{currency},</span>;
                } else return <span key={nanoid()}>{currency}</span>;
              })}
            </p>
            <p>
              <span className="span-label">Languages:</span>
              {languages.map((language) => {
                if (languages.indexOf(language) !== languages.length - 1) {
                  return <span key={nanoid()}>{language},</span>;
                } else return <span key={nanoid()}>{language}</span>;
              })}
            </p>
          </div>
          <div className="border-section">
            <p className="border-title">Border Countries:</p>
            {borders?.map((border) => (
              <div className="border-countries" key={nanoid()} style={style}>
                {border}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
