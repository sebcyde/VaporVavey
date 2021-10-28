import React from 'react';
import LoadingSymbol from '../../assets/LoadingSymbol.gif';
import './Loading.css';

function Loading() {
	return (
		<div className="LoadScreenContainer">
			<img src={LoadingSymbol} className="LoadingSymbol" alt="Loading Symbol" />
			<h1 className="LoadingText">Loading...</h1>
		</div>
	);
}

export default Loading;
