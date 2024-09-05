import { useState, useEffect, useContext } from "react";
import { DataProvider } from "./context/DataContext";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
const App = () => {
	return (
		<DataProvider>
			<NavBar />
			<div>
				<Card />
			</div>
		</DataProvider>
	);
};

export default App;
