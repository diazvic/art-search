import { DataContext } from "../context/DataContext";
import { useContext, useState } from "react";
import "../styles/_Form.scss";
import { CiSearch } from "react-icons/ci";
import UnitCards from "./UnitCards";
const Form = () => {
	const { fetchSearchData, searchResults } = useContext(DataContext);
	const [searchTerm, setSearchTerm] = useState("");

	const handleClick = () => {
		console.log("click");
		fetchSearchData(searchTerm);
	};
	const handleChange = (e) => {
		console.log(e.target.value);
		setSearchTerm(e.target.value);
	};
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<div>
				<h2>Search</h2>
				<CiSearch />
				<input
					type="search"
					placeholder="Enter your search here"
					value={searchTerm}
					onChange={handleChange}
				/>
			</div>
			<div className="flex-form">
				<label>type</label>
				<select>
					<option>Author</option>
					<option>Title</option>
				</select>
			</div>
			<div className="flex-form">
				<label>order</label>
				<select>
					<option>A-Z</option>
					<option>Z-A</option>
				</select>
			</div>
			<button className="button-form" type="submit" onClick={handleClick}>
				Search
			</button>
			{searchResults.length > 0 && (
				<div>
					<h3>Search Results</h3>
					<ul>
						{searchResults.map((info) => (
							<div key={info.id}>
								<UnitCards info={info} />
							</div>
						))}
					</ul>
				</div>
			)}
		</form>
	);
};

export default Form;
