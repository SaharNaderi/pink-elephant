import React from "react";
import { Link } from "react-router-dom";

import "../styles/Landing.css";
import HeroPic from "../images/HeroPic";


export default function Landing() {
    return (
        <>
            <dev className="container">


                <div className="hero">
                    <div className="hero-text">
                        <p className="p1">Hi ! we&apos;re</p>
                        <p className="p2">linked!</p>
                        <p className="p3">
                            xxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxx xxxxxxxxxxxx
                        </p>
                    </div>

                    <HeroPic />
                </div>
                <div className="btnContainer">
                    <Link className="linkBtn" to={"/users"}>Are you an employer?</Link>
                    <Link className="linkBtn" to={"/hireme"}>Are you looking for a job?</Link>
                </div>


            </dev>
            <div className='background_home'>
            </div>
        </>
    );
}
