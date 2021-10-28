import React from 'react';
import LoadingSymbol from '../../assets/LoadingSymbol.gif';
import './Loading.css';

function Loading() {
	return (
		<div className="LoadScreenContainer">
			<img src={LoadingSymbol} className="LoadingSymbol" />
			<h1>Loading...</h1>
		</div>
	);
}

export default Loading;
