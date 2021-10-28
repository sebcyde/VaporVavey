import React, { useState } from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Loading from './Components/Loading/Loading';
import Nav from './Components/Nav/Nav';

function App() {
	const [Splash, setSplash] = useState(<Loading />);
	setTimeout(() => {
		setSplash(() => <Banner />);
	}, 4000);

	return (
		<div className="App">
			<Nav />
			{Splash}
		</div>
	);
}

export default App;
