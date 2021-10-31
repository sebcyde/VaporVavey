import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import HomepageMain from '../HomepageMain/HomepageMain';
import './Homepage.css';

function Homepage() {
	const [Home, setHome] = useState(<Banner />);

	// const Enter = () => {
	// 	setHome(<HomepageMain />);
	// };

	function Enter() {
		setHome(<HomepageMain />);
	}

	return <div>{Home}</div>;
}

export default Homepage;
