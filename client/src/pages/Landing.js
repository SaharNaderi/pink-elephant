import React from "react";
import { Link } from "react-router-dom";
import backGround from "./../images/heroBackGround.svg";
import "../styles/Landing.css";
import heroPic from "../images/heroPic.svg";

export default function Landing() {
	return (
		<>
		<img className="backgroundHome" src={backGround} alt="" />
			<dev className="container">
				<div className="hero">
					<div className="hero-text">
						<h1 className="title">linked!</h1>
						<div className="btnContainer">
							<Link className="linkBtn text" to={"/users"}>
								Are you an employer?
							</Link>
							<Link className="linkBtn text" to={"/hireMe"}>
								Are you looking for a job?
							</Link>
						</div>
					</div>
					<img className="heroImg" src={heroPic} alt="" />
				</div>
			</dev>
			<div className="background_home"></div>
		</>
	);
}
