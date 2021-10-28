import React from 'react';
import Banner from '../Banner/Banner';
import Nav from '../Nav/Nav';
import Nav2 from '../Nav2/Nav2';

import './Homepage.css';

function Homepage() {
	return (
		<div>
			<Nav />
			<Banner />
			<Nav2 />
		</div>
	);
}

export default Homepage;
