import React, { useState, useEffect, createContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [results, setResults] = useState(null);
	const [nextPage, setNextPage] = useState(null);
	useEffect(() => {
		fetch(
			"https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number,artist_title,image_id,date_start,publication_history"
		)
			.then((res) => res.json())
			.then((data) => {
				console.log("data total:", data);

				console.log("data cargada:", data.data);
				console.log(data.pagination.total);
				setData(data.data);
				setResults(data.pagination.total);
			});
	}, []);

	return (
		<DataContext.Provider value={{ data, results, nextPage }}>
			{children}
		</DataContext.Provider>
	);
};
export { DataProvider, DataContext };
//como construir mi fetch para las imagenes

/* <img
	src="https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg"
	alt=""
></img>; */
// https://api.artic.edu/api/v1/artworks/${id}?fields=,title,image_id,artist_title,date_start,place_of_origin,artist_display,publication_history`
// 	)

// 	short_description
//https://api.artic.edu/api/v1/artists?page=2&limit=10

// next url
// https://api.artic.edu/api/v1/artworks?page=2&fields=id%2Ctitle%2Cartist_display%2Cdate_display%2Cmain_reference_number%2Cartist_title%2Cimage_id%2Cdate_start%2Cpublication_history
// setNextPage(data.pagination.next_url);
