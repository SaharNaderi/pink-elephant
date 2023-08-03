import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import { RecoilRoot } from "recoil";


import App from "./App";

createRoot(document.getElementById("root")).render(
	<RecoilRoot>
<BrowserRouter>
		<App />
	</BrowserRouter>

	</RecoilRoot>

);
