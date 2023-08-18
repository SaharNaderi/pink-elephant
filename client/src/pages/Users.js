import React from "react";
import UserBox from "../components/UserBox";
import "../styles/users.css";
import { useRecoilState } from "recoil";
import { allUserAtom } from "../App";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllUsers } from "../Utils/helperFunctions";

export default function Users() {
	const [allUser, setAllUsers] = useRecoilState(allUserAtom);
	useEffect(() => {
		getAllUsers().then(setAllUsers).catch();
	}, [setAllUsers]);
	if (allUser.length === 0) {
		return <p className="loading title">Loading...</p>;
	}
	return (
		<div className="userContainer">
			{allUser.map((user) => (
				<Link key={user.user_id} to={`/users/${user.user_id}`}>
					<UserBox
						userID={user.user_id}
						firstName={user.first_name}
						lastName={user.last_name}
						Role={user.role}
					></UserBox>
				</Link>
			))}
		</div>
	);
}
