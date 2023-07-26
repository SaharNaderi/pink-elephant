import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../src/styles/index.css";


import App from "./App";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
