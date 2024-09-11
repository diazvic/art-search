import React, { useState, useEffect, createContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [results, setResults] = useState(null);
	const [currentPage, setCurrentPage] = useState(
		"https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number,artist_title,image_id,date_start,publication_history,place_of_origin&page=1"
	);
	const [prevPage, setPrevPage] = useState(null);
	const [nextPage, setNextPage] = useState(null);
	const [lastPage, setLastPage] = useState(null);
	const [firstPage, setFirstPage] = useState(null);
	const fetchData = (url) => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log("data total:", data);

				console.log("data cargada:", data.data);
				console.log(data.pagination.total);
				setData(data.data);
				setResults(data.pagination.total);
				setNextPage(data.pagination.next_url);
				setPrevPage(data.pagination.prev_url);
				const lastPageUrl = `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number,artist_title,image_id,date_start,publication_history,place_of_origin&page=${data.pagination.total_pages}`;
				setLastPage(lastPageUrl);
				const firstPageUrl =
					"https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number,artist_title,image_id,date_start,publication_history,place_of_origin&page=1";
				setFirstPage(firstPageUrl);
			});
	};
	useEffect(() => {
		fetchData(currentPage);
	}, [currentPage]);

	const nextUrl = () => {
		setCurrentPage(nextPage);
	};

	const prevUrl = () => {
		setCurrentPage(prevPage);
	};
	const arrowLastPage = () => {
		setCurrentPage(lastPage);
	};

	const arrowFirstPage = () => {
		setCurrentPage(firstPage);
	};
	return (
		<DataContext.Provider
			value={{ data, results, nextUrl, prevUrl, arrowLastPage, arrowFirstPage }}
		>
			{children}
		</DataContext.Provider>
	);
};
export { DataProvider, DataContext };
