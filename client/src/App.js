import { Route, Routes } from "react-router-dom";
import PageTemplate from "./template/PageTemplate";
import About from "./pages/About";
import Home from "./pages/Home";
import Landing from "./pages/Landing";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />

		<Route path="/*" element={<PageTemplate />}>
		<Route path="home" element={<Landing></Landing>} /> 
          


        </Route>
	</Routes>
);

export default App;
