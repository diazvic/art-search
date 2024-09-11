import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import Form from "./Form";
import "../styles/_Card.scss";
import { useNavigate } from "react-router-dom";
import UnitCards from "./UnitCards";

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
					//aca podria ser unitCard
					<div key={info.id} className="ctn-card">
						<UnitCards info={info} />
					</div>
				))}
			</div>
		</section>
	);
};

export default Card;
