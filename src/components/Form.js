import { DataContext } from "../context/DataContext";
import { useContext, useState, useEffect } from "react";
import "../styles/_Form.scss";
import { CiSearch } from "react-icons/ci";
import UnitCards from "./UnitCards";
const Form = () => {
	const { fetchSearchData, searchResults, sortData } = useContext(DataContext);
	const [searchTerm, setSearchTerm] = useState("");
	const [select, setSelect] = useState("title");
	const [order, setOrder] = useState("asc");

	useEffect(() => {
		if (searchResults.length >= 0) {
			sortData(select, order, searchResults);
		}
	}, [select, order, searchResults, sortData]);

	const handleClick = () => {
		console.log("click");
		fetchSearchData(searchTerm);
	};
	const handleChange = (e) => {
		console.log(e.target.value);
		setSearchTerm(e.target.value);
	};
	const handleChangeSelect = (e) => {
		console.log(e.target.value);
		setSelect(e.target.value);
	};
	const handleChangeOrder = (e) => {
		setOrder(e.target.value);
	};

	return (
		<>
			<form onSubmit={(e) => e.preventDefault()}>
				<div className="box-form">
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
					<select onChange={handleChangeSelect} value={select}>
						<option value="author">Author</option>
						<option value="title">Title</option>
					</select>
				</div>
				<div className="flex-form">
					<label>order</label>
					<select onChange={handleChangeOrder} value={order}>
						<option value="asc">A-Z</option>
						<option value="desc">Z-A</option>
					</select>
				</div>
				<button className="button-form" type="submit" onClick={handleClick}>
					Search
				</button>
			</form>
			{searchResults.length > 0 && (
				<div className="box-results">
					{searchResults.map((info) => (
						<div key={info.id}>
							<UnitCards info={info} />
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Form;
