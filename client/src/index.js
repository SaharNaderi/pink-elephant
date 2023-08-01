import { createRoot } from "react-dom/client";

import "./styles/index.css";
import App from "../src/App";
import { RecoilRoot } from "recoil";




createRoot(document.getElementById("root")).render(
<RecoilRoot>


	<App />

</RecoilRoot>

);
