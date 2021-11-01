import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import HomepageMain from '../HomepageMain/HomepageMain';
import Loading from '../Loading';
import './Homepage.css';

function Homepage() {
	const [Home, setHome] = useState(<Banner />);

	if (Home === <Loading />) {
		setTimeout(() => {
			setHome(<HomepageMain />);
		}, 4000);
	}

	function Enter() {
		setHome(<Loading />);
	}

	return <div>{Home}</div>;
}

export default Homepage;
