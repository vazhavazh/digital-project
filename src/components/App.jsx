import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import Gallery from "../pages/Gallery";
import Projects from "../pages/Projects";
import Certificates from "../pages/Certificates";
import Contacts from "../pages/Contacts";

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={<Layout />}>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path='gallery'
					element={<Gallery />}
				/>
				<Route
					path='projects'
					element={<Projects />}
				/>
				<Route
					path='certificates'
					element={<Certificates />}
				/>
				<Route
					path='contacts'
					element={<Contacts />}
				/>
			</Route>
		</Routes>
	);
}

export default App;
