import React from 'react';
import Banner1 from './BannerAssets/Banner1.jpg';
import './Banner.css';

function Banner() {
	return (
		<div className="BannerContainer">
			<img src={Banner1} className="Banner1" />
		</div>
	);
}

export default Banner;
