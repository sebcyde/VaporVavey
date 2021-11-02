import React from 'react';
import Banner1 from '../HomeComponent/assets/Banner1.jpg';
import NewCollection95 from './NewCollection95/NewCollection95';
import './RecentNews.css';

function RecentNews() {
	return (
		<div id="RN">
			<div className="RecentNews">
				<h2 className="RecentNewsTitle">95 COLLECTION NOW AVAILABLE</h2>
				<NewCollection95 />
				<img src={Banner1} className="Banners" data-aos="fade-up" />
				<p data-aos="fade-up">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras
					pulvinar mattis nunc sed blandit. Elit pellentesque habitant morbi
					tristique senectus. Adipiscing diam donec adipiscing tristique risus
					nec feugiat in fermentum. Eu mi bibendum neque egestas congue.
					Fermentum dui faucibus in ornare quam. Facilisis magna etiam tempor
					orci eu lobortis. Dui accumsan sit amet nulla. Pharetra massa massa
					ultricies mi quis. Nullam vehicula ipsum a arcu cursus vitae congue
					mauris. Est ultricies integer quis auctor elit sed vulputate mi sit.
					Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam
					quis. Accumsan lacus vel facilisis volutpat est. Consequat semper
					viverra nam libero justo laoreet. Arcu non sodales neque sodales ut
					etiam sit amet nisl. Eget arcu dictum varius duis at consectetur
					lorem. Dignissim diam quis enim lobortis. Amet nisl purus in mollis
					nunc sed id semper risus.
				</p>
			</div>
		</div>
	);
}

export default RecentNews;
