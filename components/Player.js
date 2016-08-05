import React, {Component} from 'react';
import Song from './Song';
import {pluck, times, update} from 'ramda';
import axios from 'axios';
import classNames from 'classnames';

class Player extends Component {

	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			songs: [],
			titles: [],
			current: 0,
			isPlaying: false,
			loading: true
		}
		this.shush = this.shush.bind(this);
		this.playNext = this.playNext.bind(this);
		this.songUrl = this.songUrl.bind(this);
		this.handlePlayPause = this.handlePlayPause.bind(this);
		this.onLoad = this.onLoad.bind(this);
	}

	songUrl(name) {
		return `http://princess-nokia.s3-website-us-east-1.amazonaws.com/${name}`;
	}

	handlePlayPause() {
		const songs = this.state.songs;
		const current = this.state.current;
		// if all we have not played any songs
		if (songs.every(s=>!s) && this.state.current === 0) {
			this.setState({
				isPlaying: true,
				songs: update(0, true, songs)
			});
			// if currently playing, pause
		} else if (this.state.isPlaying) {
			this.setState({
				isPlaying: !this.state.isPlaying,
				songs: update(current, false, songs)
			});
			// continue where we left off
		} else {
			this.setState({
				isPlaying: !this.state.isPlaying,
				songs: update(current, true, songs)
			});
		}
	}

	shush(index, state) {
		this.setState({
			current: index,
			isPlaying: state,
			songs: update(index, state,
				times(() => false, this.state.count))
		})
	}

	playNext() {
		this.setState({
			current: this.state.current += 1,
			songs: times(() => false, this.state.count)
		});
		let next = this.state.current % this.state.count;
		// loop through all songs once
		if (this.state.count !== this.state.current) {
			this.shush(next, true, times(() => false, this.state.count))
		}
	}

	onLoad() {
		this.setState({
			loading: false
		});
	}

	componentWillMount() {
		axios.get('http://princess-nokia-api.apps.aterial.org/api/music')
			.then(res => {
				const data = res.data['princess-nokia'];
				const count = data.length;
				this.setState({
					count,
					titles: pluck('key')(data),
					// * initialize all as not playing
					songs: times(() => false, count)
				});
			})
			.catch(err => console.log(err));
	}

	render() {
		const songs = times(i => {
			return <Song key={i}
			             active={this.state.current}
			             id={i}
			             src={this.songUrl(this.state.titles[i])}
			             title={this.state.titles[i]}
			             playing={this.state.songs[i]}
			             shush={this.shush}
			             onEnd={this.playNext}
			             onLoad={this.onLoad}/>;
		}, this.state.count);
		const currentSong = (this.state.titles[this.state.current] || "").split('.')[0];
		const loadingDiv = (<div className="loader-container">
			<div className="loader"></div>
		</div>);
		const playPauseButton = (
			<div className="player-state-button"
			     onClick={this.handlePlayPause}>
				<i className={
						classNames({'fa fa-play-circle fa-3x': !this.state.isPlaying,
						'fa fa-pause-circle fa-3x': this.state.isPlaying})}
				   aria-hidden="true"></i>
			</div>);
		return (
			<div className="Player">
				<div className="current flex-row">
					{this.state.loading ? loadingDiv : playPauseButton}
					<div className="current-title">
						<span>Princess Nokia</span>
						<br/>
						<span className="current-song">{currentSong}</span>
					</div>
				</div>
				{songs}
			</div>
		);
	}
}

export default Player;