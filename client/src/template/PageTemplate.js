import React from "react";
import { Outlet, Link } from "react-router-dom";


const Template = () => {
	return (
		<>
			<body>
				<article>
					<header>
						<div className="head-container">
							<div className="logo">
								<img className="logo-icon" src="logo.svg" alt="logo" />
								<p className="slogan">WeLinked</p>
							</div>
							<div className="head-button">
								<Link to="#h">Hire Me</Link>
								<Link to="#h">Guidance</Link>
								<Link to="#h">News</Link>
								<Link to="#h">Users</Link>
							</div>
						</div>
					</header>
					<main>
						<Outlet />
					</main>
					<footer></footer>
				</article>
			</body>
		</>
	);

};

export default Template;