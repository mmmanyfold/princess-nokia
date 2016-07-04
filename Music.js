import React, {Component} from 'react';
import Player from './Player';
import {
	ShareButtons,
	ShareCounts,
	generateShareIcon
} from 'react-share';

const {
	FacebookShareButton,
	TwitterShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

const ShareTitle = 'Listen to xyz...';
const ShareUrl = 'http://localhost:3000';
const IconSize = 32;

class Music extends Component {
	render() {
		return <div>
			<b>new album</b>
			<Player/>
			<FacebookShareButton
				url={ShareUrl}
				title={ShareTitle}>
				<FacebookIcon size={IconSize} round/>
			</FacebookShareButton>
			<TwitterShareButton title={ShareTitle} url={ShareUrl}>
				<TwitterIcon size={IconSize} round/>
			</TwitterShareButton>
		</div>;
	}
}

export default Music;