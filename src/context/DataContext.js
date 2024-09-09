import React, { useState, useEffect, createContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
	const [data, setData] = useState(null);
	const [results, setResults] = useState(null);
	useEffect(() => {
		fetch(
			"https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number,artist_title,image_id"
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
		<DataContext.Provider value={{ data, results }}>
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
