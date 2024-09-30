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
	const {
		nextUrl,
		prevUrl,
		arrowLastPage,
		arrowFirstPage,
		currentSearch,
		currentSearchPage,
		totalSearchPages,
	} = useContext(DataContext);
	console.log(
		`page ${currentSearch}, ${currentSearchPage} of ${totalSearchPages}`
	);

	console.log("page total:", totalSearchPages);

	const isFirstPage = currentSearch ? currentSearchPage === 1 : !prevUrl;
	const isLastPage = currentSearch
		? currentSearchPage === totalSearchPages
		: !nextUrl;
	return (
		<>
			<div className="container-btn-pagination pagination-box">
				{currentSearch && (
					<p>
						Page: {currentSearchPage} of {totalSearchPages}
					</p>
				)}
			</div>
			<div className="container-btn-pagination">
				<button onClick={arrowFirstPage} disabled={isFirstPage}>
					<MdKeyboardDoubleArrowLeft className="arrow-pagination" />
				</button>
				<button onClick={prevUrl} disabled={isFirstPage}>
					<MdKeyboardArrowLeft className="arrow-pagination" />
				</button>
				<button onClick={nextUrl} disabled={isLastPage}>
					<MdKeyboardArrowRight className="arrow-pagination" />
				</button>
				<button onClick={arrowLastPage} disabled={isLastPage}>
					<MdKeyboardDoubleArrowRight className="arrow-pagination" />
				</button>
			</div>
		</>
	);
};

export default Pagination;
