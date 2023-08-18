import React from "react";
import SocialBox from "./SocialBox";
import "../styles/footer.css";
import emailIcon from "../images/emailIcon.svg";
import mobileIcon from "../images/mobileIcon.svg";
import locationIcon from "../images/locationIcon.svg";
import copyRight from "../images/copyRight.svg";

export default function Footer() {
	return (
		<>
			<div className="footer">
				<div className="footerContainer">
					<p className="footerText text">
						Contact us today and we’ll help you get started. Most people start
						with an About page that introduces them to potential site visitors.
					</p>

					<div>
						<SocialBox
							text={"welinked.uk@gmail.com"}
							icon={emailIcon}
						></SocialBox>
						<SocialBox text={"00447411507380"} icon={mobileIcon}></SocialBox>
						<SocialBox
							text={"The Minster Building, Great Tower St, London EC3R 7AG"}
							icon={locationIcon}
						></SocialBox>
					</div>
				</div>

				<img src={copyRight} alt="" />
			</div>
		</>
	);
}
