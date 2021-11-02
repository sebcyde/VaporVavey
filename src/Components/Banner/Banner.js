import React from 'react';
import Banner1 from './BannerAssets/Banner1.jpg';
import TopLine from '../../assets/TopLine.png';
import Entry from '../../App';
import './Banner.css';

function Banner() {
	return (
		<div className="BannerContainer">
			<img src={TopLine} className="TopLine" alt="Vaporwavey" />
			<img src={Banner1} className="Banner1" alt="Banner" />
			<button className="EntryButton" name="EntryButton">
				(Needs fix dont click)
			</button>
		</div>
	);
}

export default Banner;
