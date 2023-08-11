import React from "react";
import "./../styles/userBox.css";
export default function UserBox({ firstName , lastName ,userID , Role }) {
  return (
    <div className="userBox">
<div className="imgbox"></div>
<div className="userDetails">
    <p>First Name : {firstName}</p>
    <p>Last Name : {lastName}</p>
    <p>User ID : {userID}</p>
    <p>Role : {Role}</p>
    <p className="clickMe">click me</p>
</div>
    </div>
  );
}
