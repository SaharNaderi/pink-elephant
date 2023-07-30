import React from "react";
import "./../Styles/pageTemplate.css";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
export default function PageTemplate() {
	return (
		<article className="template-body">
			<Header></Header>

			<main>
				<Outlet />
			</main>

			<Footer></Footer>
		</article>
	);
}
