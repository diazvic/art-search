import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import {
	MdKeyboardArrowLeft,
	MdKeyboardArrowRight,
	MdKeyboardDoubleArrowLeft,
	MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import "../styles/_Pagination.scss";
const Pagination = () => {
	const { nextUrl, prevUrl, arrowLastPage, arrowFirstPage } =
		useContext(DataContext);
	console.log(nextUrl);

	return (
		<div className="container-btn-pagination">
			<button onClick={arrowFirstPage}>
				<MdKeyboardDoubleArrowLeft className="arrow-pagination" />
			</button>
			<button onClick={prevUrl}>
				<MdKeyboardArrowLeft className="arrow-pagination" />
			</button>
			<button onClick={nextUrl}>
				<MdKeyboardArrowRight className="arrow-pagination" />
			</button>
			<button onClick={arrowLastPage}>
				<MdKeyboardDoubleArrowRight className="arrow-pagination" />
			</button>
		</div>
	);
};

export default Pagination;
