import { Route, Routes } from "react-router-dom";
import PageTemplate from "./template/PageTemplate";
import LandingPage from "./template/LandingPage";


import About from "./pages/About";
import Home from "./pages/Home";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/" element={<PageTemplate />} />
		<Route path ="landingPage" element={<LandingPage />} />
	

	</Routes>
);

export default App;
