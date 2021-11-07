import axios from 'axios';
import React, { useRef } from 'react';
import TwitterEmbed from '../TwitterEmbed/TwitterEmbed';
import Banner1 from './assets/Banner1.jpg';
import './Home.css';

function Home() {
	// const TwitterDeck = useRef(TD);
	// axios.get('');

	return (
		<div id="HM">
			<div className="HompageMainLeftSection">
				<img src={Banner1} className="Banners" data-aos="fade-up" />
				<p>Fake placeholder ad</p>
				<hr />
				<h2 className="HomepageMainTitle">Join The Conversation!</h2>
				<TwitterEmbed />
			</div>
		</div>
	);
}

export default Home;
