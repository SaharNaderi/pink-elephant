import React from "react";
import SocialBox from "./SocialBox";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-contaner">
          <p className="footer-left">
            Contact us today and we’ll help you get started. Most people start
            with an About page that introduces them to potential site visitors.
          </p>

          <div className="footer-right">
            <SocialBox
              text={"welinked.uk@gmail.com"}
              icon={"email-icon.svg"}></SocialBox>
            <SocialBox
              text={"00447411507380"}
              icon={"phone-icon.svg"}></SocialBox>
            <SocialBox
              text={"The Minster Building, Grat"}
              icon={"location-icon.svg"}></SocialBox>
          </div>
        </div>

        <img src="copyright-icon.svg" alt="" />
      </div>
    </>
  );
}
