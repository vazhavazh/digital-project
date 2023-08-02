import React, { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = () => {
	return (
		<>
			<Header />
			<div className="base-container">
				<Suspense fallback={`Loading ...`}>
					<Outlet />
				</Suspense>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
