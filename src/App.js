import { DataProvider } from "./context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CardDetail from "./components/CardDetail";
import Pagination from "./components/Pagination";
import Form from "./components/Form";
const App = () => {
	return (
		<BrowserRouter>
			<DataProvider>
				<NavBar />
				<Routes>
					<Route path="/" element={<Card />} />
					<Route path="/detail" element={<CardDetail />} />
					{/* <Route path="/search" element={< />} /> */}
				</Routes>
				<Pagination />
				<Footer />
			</DataProvider>
		</BrowserRouter>
	);
};

export default App;
