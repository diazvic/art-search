import { useNavigate } from "react-router-dom";

const UnitCards = ({ info }) => {
	const navigate = useNavigate();
	// console.log(info);

	const handleClickDetail = (info) => {
		navigate("/detail", { state: { info } });
	};

	return (
		<div className="ctn-card">
			<img
				src={`https://www.artic.edu/iiif/2/${info.image_id}/full/843,/0/default.jpg`}
				alt=""
			/>
			<div className="box-info">
				<p>{info.title}</p>
				<p>{info.artist_title}</p>
				<button onClick={() => handleClickDetail(info)}>See more</button>
			</div>
		</div>
	);
};

export default UnitCards;
