import "../styles/_NavBar.scss";
import pictureMuseum from "../assets/pictureMuseum.jpeg";
const NavBar = () => {
	return (
		<>
			<nav>
				<h1>Art Institute of Chicago</h1>
			</nav>
			<div className="box-image">
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
