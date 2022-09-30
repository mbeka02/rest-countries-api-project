import { forwardRef } from "react";
import { useTheme } from "../hooks/useTheme";

const Filter = forwardRef(({ handleChange }, ref) => {
  const { mode } = useTheme();
  const style = {
    backgroundColor: mode ? "hsl(0 0% 100%)" : "hsl(209 23% 22%)",
    color: mode ? "black" : "white",
  };
  return (
    <select
      ref={ref}
      onChange={handleChange}
      className="selector"
      style={style}
    >
      <option value="All">All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
});

export default Filter;
