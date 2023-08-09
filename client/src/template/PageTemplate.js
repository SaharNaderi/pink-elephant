import React from "react";
import "./../styles/pagetemplate.css";

import Footer from "../components/Footer";
import Header from "../components/Header";

import { Outlet } from "react-router-dom";

export default function PageTemplate() {
    return (
        <article className="template-body">

            <Header></Header>

            <main className="mainclass">
                <Outlet></Outlet>
            </main>

            <Footer></Footer>
        </article>
    );
}
