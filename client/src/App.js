import { Route, Routes } from "react-router-dom";
import PageTemplate from "./template/PageTemplate";
import About from "./pages/About";

import Landing from "./pages/Landing";
import { GetAllUsers } from "./Utils/helperFunctions";

const App = () => {
GetAllUsers();
	return(<Routes>

		<Route path="/about/this/site" element={<About />} />

		<Route path="/*" element={<PageTemplate />}>
		<Route path="" element={<Landing></Landing>} />



        </Route>
	</Routes>);

};


export default App;
