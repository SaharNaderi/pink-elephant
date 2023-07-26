import React from "react";

const PageTemplate = ({ children }) => {
    return (
			<div>
				<header>{/*header content goes here*/}</header>
				<main style={{ flex: 1 }}>
					{children}
					</main>
				<footer>{/* footer content goes here*/}</footer>
			</div>
		);
};
export default PageTemplate;
