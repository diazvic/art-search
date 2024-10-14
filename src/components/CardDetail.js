import { useLocation } from "react-router-dom";
import "../styles/_CardDetail.scss";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../App.scss";
const CardDetail = () => {
	const location = useLocation();

	const { info } = location.state;
	console.log(location);

	console.log("Received info in detail page:", info);
	const { theme } = useContext(ThemeContext);
	return (
		<div className={`card-detail ${theme}`}>
			<div className={`detail-container ${theme}`}>
				<img
					src={`https://www.artic.edu/iiif/2/${info.image_id}/full/843,/0/default.jpg`}
					alt={info.title}
				/>
				<div className={`detail-box ${theme}`}>
					<h3>Year: {info.date_start}</h3>
					<h3>{info.place_of_origin}</h3>
					<h3>{info.title}</h3>
					<h3>{info.artist_display}</h3>
					<div className="box-paragraph">
						<p className={`detail-paragraph ${theme}`}>
							{info.publication_history == null
								? "This piece doesn't have a publication history"
								: info.publication_history}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardDetail;
