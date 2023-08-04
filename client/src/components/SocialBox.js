import React from "react";
import "./../styles/socialbox.css";

export default function SocialBox({ icon, text }) {
    return (
        <div className="social">
            <img src={icon} alt="" />
            <p>{text}</p>
        </div>
    );
}