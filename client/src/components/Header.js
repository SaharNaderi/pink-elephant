import React, { useState } from "react";
import "../styles/header.css";
import HumberMenu from "./HumberMenu";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
export default function Header() {
	const [isShowHumber, setIsShowHumber] = useState("");
	const [humberIsOpen, setHumberIsOpen] = useState(false);
	const humberHandler = () => {
		if (humberIsOpen) {
			setHumberIsOpen(false);
			setIsShowHumber("none");
		} else {
			setHumberIsOpen(true);
			setIsShowHumber("flex");
		}
	};
	return (
		<>
			<div className="HeaderContainer">
				<div className="HeaderLogo">
					<img src={logo} alt="logo" />
					<p>WeLinked</p>
				</div>
				<div className="HeaderBtn" style={{ display: isShowHumber }}>
					<NavLink to={"/"}>Home</NavLink>
					<NavLink to={"/hireMe"}>Hire Me</NavLink>

					<NavLink to={"/users"}>Users</NavLink>
				</div>
				<button className="humberMenu" onClick={humberHandler}>
					<HumberMenu isOpen={humberIsOpen}></HumberMenu>
				</button>
			</div>
		</>
	);
}
