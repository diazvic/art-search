import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import Form from "./Form";
const Card = () => {
	const { data } = useContext(DataContext);
	console.log("data cargada", data);

	if (!data) {
		return <div>Cargando datos...</div>;
	}

	return (
		<section>
			<Form />
			<h3>art</h3>
			<div>
				{data.map((info) => (
					<div key={info.id}>
						<li>{info.title}</li>
						<li>{info.date_display}</li>
					</div>
				))}
			</div>
		</section>
	);
};

export default Card;
