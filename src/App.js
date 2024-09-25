import { DataProvider } from "./context/DataContext";
import { Routes, Route, useLocation } from "react-router-dom";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CardDetail from "./components/CardDetail";
import Pagination from "./components/Pagination";
const App = () => {
	const location = useLocation();
	return (
		<DataProvider>
			<NavBar />
			<Routes>
				<Route path="/" element={<Card />} />
				<Route path="/detail" element={<CardDetail />} />
			</Routes>
			{location.pathname !== "/detail" && <Pagination />}
			<Footer />
		</DataProvider>
	);
};

export default App;
