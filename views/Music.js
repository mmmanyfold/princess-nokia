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

const ShareTitle = 'Princess Nokia | 1992';
const ShareUrl = 'http://princessnokia.org';
const IconSize = 25;

class Music extends Component {

	render() {
		return (
			<div className="music-view">
				{this.props.isMobile ?
					<div className="Soundcloud flex-row">
						<div>
							<a target="_blank" href="https://soundcloud.com/destiny-frasqueri/sets/1992a">Listen on SoundCloud</a>
						</div>
					</div>
					:
					<Player/>
				}
				<div className="social-share-container flex-row">
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
