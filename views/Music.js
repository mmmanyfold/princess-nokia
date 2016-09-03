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
const IconSize = 25;

class Music extends Component {
	handleBookletClick() {
		window.open('/1992-booklet.html','_blank','resizable,height=600,width=800');
	}
	render() {
		return (
			<div className="music-view">
				<Player/>
				<div className="social-share-container flex-row">
					<div>
						<a href="#"
						   onClick={this.handleBookletClick}>
							booklet
						</a>
					</div>
					<FacebookShareButton
						url={ShareUrl}
						title={ShareTitle}>
						<FacebookIcon size={IconSize} round/>
					</FacebookShareButton>
					<TwitterShareButton
						title={ShareTitle}
						url={ShareUrl}>
						<TwitterIcon size={IconSize} round/>
					</TwitterShareButton>
				</div>
			</div>
		);
	}
}

export default Music;
