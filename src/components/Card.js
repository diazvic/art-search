import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import Form from "./Form";
import "../styles/_Card.scss";
import "../App.scss";
import UnitCards from "./UnitCards";
import { ThemeContext } from "../context/ThemeContext";

const Card = () => {
	const { data, searchResults, results, currentSearch } =
		useContext(DataContext);
	const { theme } = useContext(ThemeContext);
	// console.log("data", data);
	// console.log(results);
	const displayData = currentSearch ? searchResults : data;

	if (!displayData) {
		return <div>Loading data...</div>;
	}

	return (
		<section className={`card-container ${theme}`}>
			<Form />
			{!currentSearch && (
				<>
					<div className={`title-principal-section ${theme}`}>
						<h3>Results</h3>
						<span className="result-count">{results}</span>
					</div>
					<div className="box-card">
						{displayData.map((info) => (
							<div key={info.id} className={`ctn-card ${theme}`}>
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
