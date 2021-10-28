import React, { useState } from 'react';
import './App.css';

import Homepage from './Components/Homepage/Homepage';
import Loading from './Components/Loading/Loading';

function App() {
	const [Splash, setSplash] = useState(<Loading />);
	setTimeout(() => {
		setSplash(() => <Homepage />);
		document.querySelector('body').classList.remove('loadup');
	}, 6000);

	return <div className="App">{Splash}</div>;
}

export default App;
