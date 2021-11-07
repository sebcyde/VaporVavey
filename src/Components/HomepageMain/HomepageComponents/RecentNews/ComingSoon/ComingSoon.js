import React from 'react';
import '../ComingSoon/ComingSoon.css';
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Image1 from './assets/carouselimage1.jpg';
import Image2 from './assets/carouselimage2.jpg';
import Image3 from './assets/carouselimage3.jpeg';
import Image4 from './assets/carouselimage4.png';
import Image5 from './assets/carouselimage5.png';
import Image6 from './assets/carouselimage6.jpg';

export default class extends React.Component {
	render() {
		return (
			<CarouselProvider
				naturalSlideWidth={30}
				naturalSlideHeight={30}
				totalSlides={6}
				visibleSlides={3}
			>
				<Slider>
					<Slide index={0}>
						<img src={Image1} className="ComingSoonCarouselImage" />
					</Slide>
					<Slide index={1}>
						<img src={Image2} className="ComingSoonCarouselImage" />
					</Slide>
					<Slide index={2}>
						<img src={Image3} className="ComingSoonCarouselImage" />
					</Slide>
					<Slide index={3}>
						<img src={Image4} className="ComingSoonCarouselImage" />
					</Slide>
					<Slide index={4}>
						<img src={Image5} className="ComingSoonCarouselImage" />
					</Slide>
					<Slide index={5}>
						<img src={Image6} className="ComingSoonCarouselImage" />
					</Slide>
				</Slider>
				<ButtonBack className="CarouselBackButton">Back</ButtonBack>
				<ButtonNext className="CarouselNextButton">Next</ButtonNext>
			</CarouselProvider>
		);
	}
}
