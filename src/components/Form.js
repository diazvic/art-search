import { CiSearch } from "react-icons/ci";
const Form = () => {
	return (
		<form>
			<div>
				<CiSearch />
				<input type="search" placeholder="Enter your search here" />
			</div>
			<label>tipo</label>
			<select>
				<option>Autor</option>
				<option>Titulo</option>
			</select>
			<label>orden</label>
			<select>
				<option>A-Z</option>
				<option>Z-A</option>
			</select>
			<button>Buscar</button>
		</form>
	);
};

export default Form;
