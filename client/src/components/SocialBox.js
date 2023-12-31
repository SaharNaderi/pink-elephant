import React from "react";

export default function SocialBox({ icon, text }) {
	return (
		<div className="social">
			<img src={icon} alt="" />
			<p className="text">{text}</p>
		</div>
	);
}
