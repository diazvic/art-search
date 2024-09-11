import {
	MdKeyboardArrowLeft,
	MdKeyboardArrowRight,
	MdKeyboardDoubleArrowLeft,
	MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import "../styles/_Pagination.scss";
const Pagination = () => {
	return (
		<div className="container-btn-pagination">
			<button>
				<MdKeyboardDoubleArrowLeft className="arrow-pagination" />
			</button>
			<button>
				<MdKeyboardArrowLeft className="arrow-pagination" />
			</button>
			<button>
				<MdKeyboardArrowRight className="arrow-pagination" />
			</button>
			<button>
				<MdKeyboardDoubleArrowRight className="arrow-pagination" />
			</button>
		</div>
	);
};

export default Pagination;
