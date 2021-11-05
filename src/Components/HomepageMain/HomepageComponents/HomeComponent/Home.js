import React, { useRef } from 'react';
import Banner1 from './assets/Banner1.jpg';
import './Home.css';

function Home() {
	// const TwitterDeck = useRef(TD);

	return (
		<div id="HM">
			<div className="HompageMainLeftSection">
				<h2 className="HomepageMainTitle">Join The Conversation!</h2>

				<img src={Banner1} className="Banners" data-aos="fade-up" />
				<p>Fake placeholder ad</p>

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

export default Home;
