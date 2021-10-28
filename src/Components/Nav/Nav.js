import React from 'react';
import Logo from './Logo.png';
import './Nav.css';

function Nav() {
	return (
		<div className="Nav">
			"
			<img src={Logo} className="Logo" />
			<a href="#">
				<p className="NavProductsTab">Contact Us</p>
			</a>
			<a href="#">
				<p className="NavAboutTab">About</p>
			</a>
		</div>
	);
}

export default Nav;
