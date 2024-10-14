import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { CiHeart } from "react-icons/ci";
import "../styles/_Footer.scss";
const Footer = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<footer className={`${theme}`}>
			<p>
				Created with <CiHeart /> by Victoria Diaz
			</p>
		</footer>
	);
};

export default Footer;
