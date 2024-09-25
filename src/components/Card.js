import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import Form from "./Form";
import "../styles/_Card.scss";
import UnitCards from "./UnitCards";

const Card = () => {
	const { data, searchResults, results, currentSearch } =
		useContext(DataContext);
	// console.log("data", data);
	// console.log(results);
	const displayData = currentSearch ? searchResults : data;

	if (!displayData) {
		return <div>Loading data...</div>;
	}

	return (
		<section>
			<Form />
			{!currentSearch && (
				<>
					<div className="title-principal-section">
						<h3>Results</h3>
						<span className="result-count">{results}</span>
					</div>
					<div className="box-card">
						{displayData.map((info) => (
							<div key={info.id} className="ctn-card">
								<UnitCards info={info} />
							</div>
						))}
					</div>
				</>
			)}
		</section>
	);
};

export default Card;
