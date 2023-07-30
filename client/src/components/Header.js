import React from "react";
import "./../Styles/header.css";
export default function Header() {
  return (
    <>
      <div className="Header-contaner">
        <div className="Header-logo">
          <img
            className="Header-logo-icon"
            src="logo.svg"
            alt="logo"
          />
          <p className="Header-logo-text">WeLinked</p>
        </div>
        <div className="Header-btn">
          <a href="#h">Hire Me</a>
          <a href="#h">Guidens</a>
          <a href="#h">News</a>
          <a href="#h">Users</a>
        </div>
       
        
      </div>
    </>
  );
}
