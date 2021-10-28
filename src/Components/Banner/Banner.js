import React from 'react';
import Banner1 from './BannerAssets/Banner1.jpg';
import Heading from './BannerAssets/Heading.png';
import './Banner.css';

function Banner() {
	return (
		<div className="BannerContainer">
			<img src={Banner1} className="Banner1" />
			<img src={Heading} className="Heading" />
			<h1 className="BannerText">View the latest looks</h1>
		</div>
	);
}

export default Banner;
