import { Route, Routes } from "react-router-dom";
import PageTemplate from "./template/PageTemplate";


import About from "./pages/About";
import Main from "./pages/Main";

const App = () => (
	<Routes>
		<Route path="/about/this/site" element={<About />} />
		<Route path="/*" element={<PageTemplate />}>
			<Route path="" element={<Main></Main>} />
		</Route>
	</Routes>
);

export default App;
