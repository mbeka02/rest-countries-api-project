import { useContext } from "react";
import { ThemeContext } from "../helper/Context";

export const useTheme = () => useContext(ThemeContext);
