import { Route, Routes } from "react-router-dom";
import PageTemplate from "./template/PageTemplate";
import About from "./pages/About";
import Users from "./pages/Users";
import Landing from "./pages/Landing";
import RequiredInput from "./pages/RequiredInput";
import { GetAllUsers } from "./Utils/helperFunctions";
const App = () => {
	GetAllUsers();
	return(<Routes>

		<Route path="/about/this/site" element={<About />} />

		<Route path="/*" element={<PageTemplate />}>
		<Route path="" element={<Landing></Landing>} />
		<Route path="users" element={<Users></Users>} />
		<Route path="hireme" element={<RequiredInput></RequiredInput>} />


        </Route>
	</Routes>);

};



export default App;
