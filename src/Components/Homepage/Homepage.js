import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Nav2 from '../Nav2/Nav2';
import HomepageMain from '../HomepageMain/HomepageMain';
import './Homepage.css';

function Homepage() {
	return (
		<div>
			<Banner />
			<Nav2 />
			<HomepageMain />
		</div>
	);
}

export default Homepage;
