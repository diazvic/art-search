import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import Form from "./Form";
import "../styles/_Card.scss";
const Card = () => {
	const { data, results } = useContext(DataContext);

	console.log("data cargada", data);
	console.log(results);

	if (!data) {
		return <div>Loading data...</div>;
	}
	return (
		<section>
			<Form />
			<div className="title-principal-section">
				<h3>Results</h3>
				<span className="result-count">{results}</span>
			</div>
			<div className="box-card">
				{data.map((info) => (
					<div key={info.id} className="ctn-card">
						<img
							src={`https://www.artic.edu/iiif/2/${info.image_id}/full/843,/0/default.jpg`}
							alt=""
						/>
						<div className="box-info">
							<p>{info.title}</p>
							<p>{info.artist_title}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Card;
