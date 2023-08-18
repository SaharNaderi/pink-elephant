import React from "react";
import "./../styles/pageTemplate.css";

import Footer from "../components/Footer";
import Header from "../components/Header";

import { Outlet } from "react-router-dom";

export default function pageTemplate() {
	return (
		<article className="template-body">
			<Header></Header>

			<main>
				<Outlet></Outlet>
			</main>

			<Footer></Footer>
		</article>
	);
}
