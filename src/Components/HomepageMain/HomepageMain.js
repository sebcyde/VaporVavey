import React from 'react';
import './HomepageMain.css';
import Banner1 from './assets/Banner1.jpg';
import FakeAd1 from './assets/fakead1.png';
import FakeAd2 from './assets/fakead2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomepageMain() {
	AOS.init();
	return (
		<div className="HomepageMainContainer" data-aos="fade-up">
			<div className="HompageMainLeftSection">
				<h2 className="HomepageMainTitle">Placeholder Text</h2>

				<p>
					s the href value. If you cannot provide a valid href, but still need
					the element to resemble a link, use a button and change it with
					appropriate styles. Learn more:
					https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
					jsx-a11y/anchor-is-valid Line 17:6: The href attribute requires a
					valid value to be accessible. Provide a valid, navigable address as
					the href value. If you cannot provide a valid href, but still need the
					element to resemble a link, use a button and change it with
					appropriate styles. Learn more:
					https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
					jsx-a11y/anchor-is-valid Line 20:6: The href attribute requires a
					valid value to be accessible. Provide a valid, navigable address as
					the href value. If you cannot provide a valid href, but still need the
					element to resemble a link, use a button and change it with
					appropriate styles. Learn more:
					https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
					jsx-a11y/anchor-is-valid Line 23:6: The href attribute requires a
					valid value to be accessible. Provide a valid, navigable address as
					the href value. If you cannot provide a valid href, but still need the
					element to resemble a link, use a button and change it with
					appropriate styles. Learn more:
					https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
					jsx-a11y/anchor-is-valid Line 26:6: The href attribute requires a
					valid value to be accessible. Provide a valid, navigable address as
					the href value. If you cannot provide a valid href, but still need the
					element to resemble a link, use a button and change it with
					appropriate styles. Learn more:
					https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
					jsx-a11y/anchor-is-valid
				</p>

				<img src={Banner1} className="Banners" data-aos="fade-up" />
				<p>Fake placeholder ad</p>
			</div>
			<div className="HompageMainRightSection">
				<p>fake placeholder ads lol</p>
				<img src={FakeAd1} data-aos="fade-up" />
				<img src={FakeAd2} data-aos="fade-up" />
			</div>
		</div>
	);
}

export default HomepageMain;
