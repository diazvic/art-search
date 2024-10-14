import "../styles/_NavBar.scss";
import "../App.scss";
import pictureMuseum from "../assets/pictureMuseum.jpeg";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const NavBar = () => {
	const { theme, handleTheme } = useContext(ThemeContext);

	return (
		<>
			<nav className={`${theme}`}>
				<h1>Art Institute of Chicago</h1>
				<button
					className="button-theme"
					onClick={() => {
						console.log(`test click ${theme}`);
						handleTheme();
					}}
				>
					{theme === "light" ? (
						<MdDarkMode
							style={{
								fontSize: "1.5rem",
								color: "#000",
							}}
						/>
					) : (
						<MdOutlineWbSunny
							className={`sunny-icon ${theme}`}
							style={{
								fontSize: "1.5rem",
							}}
						/>
					)}
				</button>
			</nav>
			<div className={`box-image ${theme}`}>
				<img
					src={pictureMuseum}
					alt="photo from museum"
					className="image-museum"
				/>
			</div>
		</>
	);
};

export default NavBar;
