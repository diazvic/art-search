import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");

	const handleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	};

	useEffect(() => {
		document.body.className = theme === "dark" ? "dark" : "";
	}, [theme]);

	const data = { theme, handleTheme };
	return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider, ThemeContext };
