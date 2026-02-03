import React from "react";
import "../../styles/global.css";

export const Navbar = ({ title = "E-Commerce App", children }) => (
	<nav className="navbar">
		<div className="navbar-title">{title}</div>
		<div className="navbar-actions">{children}</div>
	</nav>
);
