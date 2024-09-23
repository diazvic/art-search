import React, { useState, useEffect, createContext, useCallback } from "react";

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
	const [searchResults, setSearchResults] = useState([]); //saved new results with search
	const [currentSearch, setCurrentSearch] = useState(null);
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

	const fetchSearchData = (searchTerm) => {
		const searchUrl = `https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&fields=id,title,artist_display,date_display,main_reference_number,artist_title,image_id,date_start,publication_history,place_of_origin`;

		fetch(searchUrl)
			.then((res) => res.json())
			.then((data) => {
				console.log("search data:", data.data);
				setSearchResults(data.data); // update results to search
				setCurrentSearch(searchTerm);
				console.log("search input:", searchTerm);
			});
	};

	const sortData = useCallback(
		(field, order) => {
			const dataSetToSort = currentSearch ? searchResults : data;
			if (dataSetToSort.length === 0) {
				console.log("No data to sort");
				return;
			}
			const sortedData = [...dataSetToSort].sort((a, b) => {
				if (field === "author") {
					return order === "asc"
						? a.artist_display.localeCompare(b.artist_display)
						: b.artist_display.localeCompare(a.artist_display);
				} else if (field === "title") {
					return order === "asc"
						? a.title.localeCompare(b.title)
						: b.title.localeCompare(a.title);
				}
				return 0;
			});
			// The state is only updated if the sorted data is different
			//from the current data, which prevents unnecessary re-renders
			const dataIsEqual =
				JSON.stringify(sortedData) === JSON.stringify(dataSetToSort);
			if (!dataIsEqual) {
				if (currentSearch) {
					setSearchResults(sortedData);
				} else {
					setData(sortedData);
				}
			}

			console.log("sortedData:", sortedData);
		},
		[data, searchResults, currentSearch]
	);

	useEffect(() => {
		fetchData(currentPage);
	}, [currentPage]);

	useEffect(() => {
		if (currentSearch) {
			fetchSearchData(currentSearch);
		}
	}, [currentSearch]);

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
			value={{
				data,
				results,
				nextUrl,
				prevUrl,
				arrowLastPage,
				arrowFirstPage,
				searchResults,
				fetchSearchData,
				setData,
				currentSearch,
				sortData,
				setSearchResults,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
export { DataProvider, DataContext };
