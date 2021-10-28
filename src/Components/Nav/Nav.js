import React from 'react';
import './Nav.css';

function Nav() {
	return (
		<div className="Nav">
			<a href="#">
				<p className="NavTitle">VaporWavey</p>
			</a>
			<a href="#">
				<p className="NavProductsTab">Products</p>
			</a>
			<a href="#">
				<p className="NavAboutTab">About</p>
			</a>
		</div>
	);
}

export default Nav;
