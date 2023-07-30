import { Route, Routes } from "react-router-dom";
import PageTemplate from "./template/PageTemplate";




const App = () => (
	<Routes>
	<Route path="/" element={<PageTemplate />}>
		<Route index element={<LandingPage />}></Route>
	</Route>




	</Routes>
);

export default App;
