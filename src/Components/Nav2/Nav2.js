import React, { useState } from 'react';
import './Nav2.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopLine from '../../assets/TopLine.png';

function Nav2() {
	AOS.init();

	return (
		<div className="Nav2" data-aos="fade-up">
			<ul>
				<li className="Nav2Logo">
					<img src={TopLine} />
				</li>
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
