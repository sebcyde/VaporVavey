import React, { useState } from 'react';
import './Nav2.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import RecentNewsSwitch from '../HomepageMain/HomepageMain';
import HomeSwitch from '../HomepageMain/HomepageMain';

function Nav2() {
	AOS.init();

	return (
		<div className="Nav2">
			<ul>
				<li>
					<a href="#RN" className="RecentNewsNavLink">
						Recent News
					</a>
				</li>
				<li>
					<a href="#" className="ProductsNavLink" onClick="{}">
						Products
					</a>
				</li>
				<li>
					<a href="#" className="ForumNavLink" onClick="{}">
						Forum
					</a>
				</li>
				<li>
					<form>
						<input className="Searchbar" />
						<button>Go</button>
					</form>
				</li>
			</ul>
		</div>
	);
}

export default Nav2;
