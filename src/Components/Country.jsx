//Custom hook
import { useTheme } from "../hooks/useTheme";

export default function Country(props) {
  const { mode } = useTheme();

  return (
    <div
      className="card"
      onClick={() => {
        props.handleClick(props.id);
      }}
      style={{ backgroundColor: mode ? "hsl(0 0% 100%)" : "hsl(209 23% 22%)" }}
    >
      <div className="flag--container">
        <img className="card--flag" src={props.flag} alt=""></img>
      </div>
      <div
        className="card--container"
        style={{ color: mode ? "black" : "white" }}
      >
        <h2>{props.name}</h2>
        <p>
          Population:<span>{props.population}</span>
        </p>
        <p>
          Region:<span>{props.region}</span>
        </p>
        <p>
          Capital:<span>{props.capital}</span>
        </p>
      </div>
    </div>
  );
}
