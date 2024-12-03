import { useEffect, useState } from "react";
import { VscColorMode } from "react-icons/vsc";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const themeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <button style={{ padding: "8px", scale: "0.8" }} onClick={themeToggle}>
      <VscColorMode />
    </button>
  );
};
export default ThemeToggle;
