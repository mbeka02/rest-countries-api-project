import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
//Custom hook
import { useTheme } from "../hooks/useTheme";
export default function Search({ change }) {
  const { mode } = useTheme();
  //Styling
  const style = {
    backgroundColor: mode ? "hsl(0 0% 100%)" : "hsl(209 23% 22%)",
    color: mode ? "black" : "white",
  };
  return (
    <div className="search-section" style={style}>
      <FontAwesomeIcon
        className="search-icon"
        icon={faMagnifyingGlass}
        style={{ color: mode ? "black" : "white" }}
      />
      <input
        className="search-bar"
        placeholder="Search for a country..."
        onChange={change}
        style={style}
      ></input>
    </div>
  );
}
