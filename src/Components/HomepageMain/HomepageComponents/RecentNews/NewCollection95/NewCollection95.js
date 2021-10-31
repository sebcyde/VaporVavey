import React from 'react';
import AOS from 'aos';

import BT1 from './assets/BlackTee1.jpg';
import BT2 from './assets/BlackTee2.jpg';
import BT3 from './assets/BlackTee3.jpg';
import BT4 from './assets/BlackTee4.jpg';

import BJ1 from './assets/BlackJumper1.jpg';
import BJ2 from './assets/BlackJumper2.jpg';
import BJ3 from './assets/BlackJumper3.jpg';
import BJ4 from './assets/BlackJumper4.jpg';

import WT1 from './assets/WhiteTee1.jpg';
import WT2 from './assets/WhiteTee2.jpg';
import WT3 from './assets/WhiteTee3.jpg';
import WT4 from './assets/WhiteTee4.jpg';

import WJ1 from './assets/WhiteJumper1.jpg';
import WJ2 from './assets/WhiteJumper2.jpg';
import WJ3 from './assets/WhiteJumper3.jpg';
import WJ4 from './assets/WhiteJumper4.jpg';
import './NewCollection95.css';

function NewCollection95() {
	return (
		<div>
			<div className="NewCollection95">
				<ul className="NewItemsRow1" data-aos="fade-up">
					<li className="Row1Item1">
						<h3>Internal Displacement Tee</h3>
						<img src={BT1} />
					</li>
					<li className="Row1Item2">
						<h3>Blades Out Tee</h3>
						<img src={BT2} />
					</li>
					<li className="Row1Item3">
						<h3>Public Image Tee</h3>
						<img src={BT3} />
					</li>
					<li className="Row1Item4">
						<h3>A.S.A. Tee</h3>
						<img src={BT4} />
					</li>
				</ul>
				<hr />
				<ul className="NewItemsRow2" data-aos="fade-up">
					<li className="Row2Item1">
						<h3>Internal Displacement</h3>
						<img src={BJ1} />
					</li>
					<li className="Row2Item2">
						<h3>Blades Out</h3>
						<img src={BJ2} />
					</li>
					<li className="Row2Item3">
						<h3>Public Image</h3>
						<img src={BJ3} />
					</li>
					<li className="Row2Item4">
						<h3>A.S.A.</h3>
						<img src={BJ4} />
					</li>
				</ul>
				<hr />
				<ul className="NewItemsRow3" data-aos="fade-up">
					<li className="Row3Item1">
						<h3>Surprise Attack Tee</h3>
						<img src={WT1} />
					</li>
					<li className="Row3Item2">
						<h3>Why So Sad Tee</h3>
						<img src={WT2} />
					</li>
					<li className="Row3Item3">
						<h3>Nekomata Tee</h3>
						<img src={WT3} />
					</li>
					<li className="Row3Item4">
						<h3>Siamese Vision Tee</h3>
						<img src={WT4} />
					</li>
				</ul>
				<hr />
				<ul className="NewItemsRow4" data-aos="fade-up">
					<li className="Row4Item1">
						<h3>Surprise Attack </h3>
						<img src={WJ1} />
					</li>
					<li className="Row4Item2">
						<h3>Why So Sad </h3>
						<img src={WJ2} />
					</li>
					<li className="Row4Item3">
						<h3>Nekomata</h3>
						<img src={WJ3} />
					</li>
					<li className="Row4Item4">
						<h3>Siamese Vision</h3>
						<img src={WJ4} />
					</li>
				</ul>
				<hr />
			</div>
		</div>
	);
}

export default NewCollection95;
