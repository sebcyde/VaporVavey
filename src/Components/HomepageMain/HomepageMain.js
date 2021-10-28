import React from 'react';
import './HomepageMain.css';
import FakeAd1 from './assets/fakead1.png';
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
			</div>
			<div className="HompageMainRightSection">
				<img src={FakeAd1} />
				<img />
			</div>
		</div>
	);
}

export default HomepageMain;