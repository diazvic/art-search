import React, { useState, useEffect, createContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(
			"https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number"
		)
			.then((res) => res.json())
			.then((data) => {
				console.log("data cargada:", data);
				setData(data.data);
			});
	}, []);

	return (
		<DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
	);
};
export { DataProvider, DataContext };
