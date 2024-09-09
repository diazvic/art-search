import { DataProvider } from "./context/DataContext";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
const App = () => {
	return (
		<DataProvider>
			<NavBar />
			<div>
				<Card />
			</div>
			<Footer />
		</DataProvider>
	);
};

export default App;
