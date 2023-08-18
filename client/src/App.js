import { Route, Routes } from "react-router-dom";
import PageTemplate from "./template/PageTemplate";

import Users from "./pages/Users";
import Landing from "./pages/Landing";
import User from "./pages/User";
import RequiredInput from "./pages/RequiredInput";
import { getAllUsers } from "./Utils/helperFunctions";

import { useEffect } from "react";

import { atom, useRecoilState } from "recoil";

export const allUserAtom = atom({
	key: "allUserAtom",
	default: [],
});

const App = () => {
	const [, setAllUsers] = useRecoilState(allUserAtom);
useEffect( () => {
		getAllUsers().then(setAllUsers).catch();
	}, [setAllUsers]);
	return (
		<Routes>
			<Route path="/*" element={<PageTemplate />}>
				<Route path="" element={<Landing></Landing>} />
				<Route path="hireMe" element={<RequiredInput></RequiredInput>} />
				<Route path="users" element={<Users></Users>} />
				<Route path="users/:userId" element={<User></User>} />
			</Route>
		</Routes>
	);
};

export default App;
