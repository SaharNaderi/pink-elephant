import React from "react";
import "./../styles/socialBox.css";

export default function SocialBox({ icon, text }) {
	return (
		<div className="social">
			<img src={icon} alt="" />
			<p className="text">{text}</p>
		</div>
	);
}
