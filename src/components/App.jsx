import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";

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
			</Route>
		</Routes>
	);
}

export default App;
