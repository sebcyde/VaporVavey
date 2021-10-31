import React from 'react';
import Banner1 from './BannerAssets/Banner1.jpg';
import TopLine from '../../assets/TopLine.png';
import Enter from '../Homepage/Homepage';
import './Banner.css';

function Banner() {
	const handleClick = () => {
		Enter();
	};

	return (
		<div className="BannerContainer">
			<img src={TopLine} className="TopLine" alt="Vaporwavey" />
			<img src={Banner1} className="Banner1" alt="Banner" />
			<button className="EntryButton" onClick={handleClick}>
				Join The Revolution
			</button>
		</div>
	);
}

export default Banner;
