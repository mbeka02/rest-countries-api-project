import { useTheme } from "../hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  //Destructuring Context provider values
  const { mode, toggle } = useTheme();

  //Styling
  const style = {
    backgroundColor: mode ? "hsl(0 0% 100%)" : "hsl(209 23% 22%)",
    color: mode ? "black" : "white",
  };
  return (
    <nav className="navbar" style={style}>
      <h2 className="navbar--title">Where in the world?</h2>
      <div className="toggle-section" onClick={toggle}>
        <FontAwesomeIcon
          icon={faMoon}
          alt="toggle"
          className="toggle"
          style={{ color: mode ? "black" : "white" }}
        />
        <span className="toggle-mode">
          {mode ? "Dark Mode" : " Light Mode"}
        </span>
      </div>
    </nav>
  );
}
