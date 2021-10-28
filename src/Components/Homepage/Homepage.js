import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import HomepageMain from '../HomepageMain/HomepageMain';
import Nav from '../Nav/Nav';
import Nav2 from '../Nav2/Nav2';

import './Homepage.css';

function Homepage() {
	const [Home, setHome] = useState(<HomepageMain />);

	return (
		<div>
			<Nav />
			<Banner />
			<Nav2 />
			{Home}
		</div>
	);
}

export default Homepage;
