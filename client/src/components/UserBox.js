import React from "react";
import "../styles/userBox.css";
import userImg from "../images/user.svg";

export default function UserBox({ firstName, lastName, userID, Role }) {
	return (
		<div className="userBox">
			<img className="userImg" src={userImg} alt="" />
			<div className="userDetails">
				<p className="text">First Name : {firstName}</p>
				<p className="text">Last Name : {lastName}</p>
				<p className="text">User ID : {userID}</p>
				<p className="text">Role : {Role}</p>
				<p className="clickMe text ">click me</p>
			</div>
		</div>
	);
}
