import { DataProvider } from "./context/DataContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CardDetail from "./components/CardDetail";
import Pagination from "./components/Pagination";
const App = () => {
	return (
		<BrowserRouter>
			<DataProvider>
				<NavBar />
				<Routes>
					<Route path="/" element={<Card />} />
					<Route path="/detail" element={<CardDetail />} />
				</Routes>
				<Pagination />
				<Footer />
			</DataProvider>
		</BrowserRouter>
	);
};

export default App;
