import React from 'react';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import './TwitterEmbed.css';

function TwitterEmbed() {
	return (
		<TwitterTimelineEmbed
			sourceType="profile"
			screenName="VaporFashion"
			options={{ width: 500 }}
			noScrollbar={true}
			theme="dark"
			// borderColor="CADFFF"
		/>
	);
}

export default TwitterEmbed;
