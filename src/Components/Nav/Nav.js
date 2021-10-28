import React from 'react';
import Logo from './Logo.png';
import './Nav.css';

function Nav() {
	return (
		<div className="Nav">
			<img src={Logo} className="Logo" />
		</div>
	);
}

export default Nav;
