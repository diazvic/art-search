import "../styles/_Form.scss";
import { CiSearch } from "react-icons/ci";
const Form = () => {
	return (
		<form>
			<div>
				<h2>Search</h2>
				<CiSearch />
				<input type="search" placeholder="Enter your search here" />
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
			<button className="button-form">Search</button>
		</form>
	);
};

export default Form;
