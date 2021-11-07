import React from 'react';
import Banner3 from '../HomeComponent/assets/Banner3.jpg';
import ComingSoon from './ComingSoon/ComingSoon';
import NewCollection95 from './NewCollection95/NewCollection95';
import './RecentNews.css';

function RecentNews() {
	return (
		<div>
			<div className="RecentNews">
				<h2 className="RecentNewsTitle" id="RN">
					95 COLLECTION NOW AVAILABLE
				</h2>
				<NewCollection95 />
				<h2 className="RecentNewsTitle" id="HM">
					COMING SOON!
				</h2>
				<img src={Banner3} className="Banners" data-aos="fade-up" />
				<p data-aos="fade-up">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras
					pulvinar mattis nunc sed blandit. Elit pellentesque habitant morbi
					tristique senectus.
				</p>
				<ComingSoon />
			</div>
		</div>
	);
}

export default RecentNews;
