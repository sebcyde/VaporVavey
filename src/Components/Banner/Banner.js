import React from 'react';
import Banner1 from './BannerAssets/Banner1.jpg';
import Heading from './BannerAssets/Heading.png';
import Arrow from './BannerAssets/A.png';
import './Banner.css';

function Banner() {
	return (
		<div className="BannerContainer">
			<img src={Banner1} className="Banner1" alt="Banner" />
			<img src={Heading} className="Heading" alt="We are fashion" />
			<br />
			<img src={Arrow} className="ArrowDown" alt="Down arrow" />
		</div>
	);
}

export default Banner;
