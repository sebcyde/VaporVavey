import React from 'react';
import './HomepageMain.css';
import Home from './HomepageComponents/HomeComponent/Home';
import RecentNews from './HomepageComponents/RecentNews/RecentNews';
import FakeAd1 from './assets/fakead1.png';
import FakeAd2 from './assets/fakead2.png';
import FakeAd3 from './assets/fakead3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomepageMain() {
	AOS.init();

	return (
		<div className="HomepageMainContainer" data-aos="fade-up">
			<div className="HompageMainLeftSection">
				<RecentNews />
				<hr />
				<Home />
			</div>
			<div className="HompageMainRightSection">
				<p>fake placeholder ads</p>
				<img src={FakeAd1} data-aos="fade-up" />
				<img src={FakeAd2} data-aos="fade-up" />
				<img src={FakeAd3} data-aos="fade-up" />
			</div>
		</div>
	);
}

export default HomepageMain;
