import React from "react";
import SocialBox from "./SocialBox";
import "./../styles/footer.css";
import emailicon from "./../images/emailIcon.svg";
import mobileicon from "./../images/mobileIcon.svg";
import locationicon from "./../images/locatIonicon.svg";
import copyRight from "./../images/copyRight.svg";
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
							icon={emailicon}
						></SocialBox>
						<SocialBox text={"00447411507380"} icon={mobileicon}></SocialBox>
						<SocialBox
							text={"The Minster Building, Great Tower St, London EC3R 7AG"}
							icon={locationicon}
						></SocialBox>
					</div>
				</div>

				<img src={copyRight} alt="" />
			</div>
		</>
	);
}
