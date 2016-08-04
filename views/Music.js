import React, {Component} from 'react';
import Player from '../components/Player';
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
		return (
			<div className="music-view" style={{'left': this.props.left}}>
				<b>1992</b>
				<Player/>
				<div className="social-share-container">
					<FacebookShareButton
						url={ShareUrl}
						title={ShareTitle}>
						<FacebookIcon size={IconSize} round/>
					</FacebookShareButton>
					<TwitterShareButton title={ShareTitle} url={ShareUrl}>
						<TwitterIcon size={IconSize} round/>
					</TwitterShareButton>
					<a className='btn btn-default' href="https://s3.amazonaws.com/princess-nokia/album.zip" target='_blank'>download the music</a>
				</div>
			</div>
		);
	}
}

export default Music;
