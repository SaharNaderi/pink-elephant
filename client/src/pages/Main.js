import React from "react";

import Footer from "../Components/Footer";
import "./../Styles/main.css";

import { GetAllUsers } from "../Utils/HealperFunction";

export default function Main() {
  GetAllUsers();
  return (

    <>
      <dev className="contaner">


        <div className="hero">
          <div className="hero-text">
            <p className="p1">Hi ! we're</p>
            <p className="p2">linked!</p>
            <p className="p3">
              xxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxx xxxxxxxxxxxx
            </p>
          </div>

          <img className="hero-img" src="hero-pic.svg" alt="" />
        </div>


      </dev>
    </>
  );
}
