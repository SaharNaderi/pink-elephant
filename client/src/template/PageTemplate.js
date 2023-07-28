import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";



const PageTemplate = () => {
	return (
		<article className="template-body">
			<Header></Header>

			<main>
				<Outlet></Outlet>
			</main>

			<Footer></Footer>
		</article>
	);

};

export default PageTemplate;