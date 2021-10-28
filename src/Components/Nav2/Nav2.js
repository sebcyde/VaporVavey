import React, { useState } from 'react';
import './Nav2.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Nav2() {
	AOS.init();

	// const [NavItem, setNavItem] = useState(initialState);

	return (
		<div className="Nav2" data-aos="fade-left">
			<ul>
				<li>
					<a href="#" selected="selected">
						Home
					</a>
				</li>
				<li>
					<a href="#">Recent News</a>
				</li>
				<li>
					<a href="#">Products</a>
				</li>
				<li>
					<a href="#">Forum</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
			</ul>
		</div>
	);
}

export default Nav2;
