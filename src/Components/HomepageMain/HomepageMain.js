import React from 'react';
import './HomepageMain.css';
import Home from './HomepageComponents/HomeComponent/Home';
import FakeAd1 from './assets/fakead1.png';
import FakeAd2 from './assets/fakead2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomepageMain() {
	AOS.init();
	return (
		<div className="HomepageMainContainer" data-aos="fade-up">
			<Home />
			<div className="HompageMainRightSection">
				<p>fake placeholder ads lol</p>
				<img src={FakeAd1} data-aos="fade-up" />
				<img src={FakeAd2} data-aos="fade-up" />
			</div>
		</div>
	);
}

export default HomepageMain;
