import React, {Component} from 'react';
import Song from './Song';
import {pluck, times, update} from 'ramda';
import axios from 'axios';
import classNames from 'classnames';

const go = require('../img/splash-1992/vertical/go.png');
const stop = require('../img/splash-1992/vertical/stop.png');

class Player extends Component {

	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			songs: [],
			titles: [],
			current: 0,
			isPlaying: false,
			manyLoaded: 0,
			loading: true
		}
		this.shush = this.shush.bind(this);
		this.playNext = this.playNext.bind(this);
		this.songUrl = this.songUrl.bind(this);
		this.handlePlayPause = this.handlePlayPause.bind(this);
		this.onLoad = this.onLoad.bind(this);
		this.handlePlayNext = this.handlePlayNext.bind(this);
		this.handlePlayPrevious = this.handlePlayPrevious.bind(this);
	}

	songUrl(name) {
		return `http://d2jrb1r3hjk0r6.cloudfront.net/${name}`;
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
		});
	}

	playNext() {
		this.setState({
			current: this.state.current += 1,
			songs: times(() => false, this.state.count)
		});
		let next = this.state.current % this.state.count;
		// loop through all songs once
		if (this.state.count !== this.state.current) {
			this.shush(next, true, times(() => false, this.state.count));
		}
	}

	handlePlayPrevious() {
		if (!this.state.loading) {
			this.setState({
				current: this.state.current -= 1,
				songs: times(() => false, this.state.count)
			});
			let next = this.state.current % this.state.count;
			this.shush(next, true, times(() => false, this.state.count))
		}
	}

	handlePlayNext() {
		if (!this.state.loading) {
			this.setState({
				current: this.state.current += 1,
				songs: times(() => false, this.state.count)
			});
			let next = Math.abs(this.state.current) % this.state.count;
			this.shush(next, true, times(() => false, this.state.count));
		}
	}

	onLoad() {
		const thisMany = this.state.manyLoaded + 1;
		this.setState({
			manyLoaded: thisMany
		});
		if (this.state.manyLoaded === this.state.songs.length) {
			this.setState({
				loading: false
			});
		}
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
		const title = this.state.titles[Math.abs(this.state.current)] || "";
		const currentSong = title.substring(0, title.length - 4);
		const loadingDiv = (<div className="loader-container">
			<div className="loader"></div>
		</div>);
		const playPauseButton = (
			<div className="player-state-button"
			     onClick={this.handlePlayPause}>
				{ (!this.state.isPlaying) ? <img src={go} alt="play" width={50}/> :
					<img src={stop} alt="stop" width={50}/>}
			</div>);
		const playNextButton = (
			<div className={classNames('player-state-button',
				{'disabled-btn': this.state.loading})}
			     onClick={this.handlePlayNext}>
				<i className="fa fa-step-forward fa-3x" aria-hidden="true"></i>
			</div>);
		const playPreviousButton = (
			<div className={classNames('player-state-button',
				{'disabled-btn': this.state.loading})}
			     onClick={this.handlePlayPrevious}>
				<i className="fa fa-step-backward fa-3x" aria-hidden="true"></i>
			</div>);
		return (
			<div className="Player">
				<div className="current flex-row">
					{playPreviousButton}
					{this.state.loading ? loadingDiv : playPauseButton}
					{playNextButton}
					<div className="current-title">
						<span>1992</span>
						<br/>
						<b className="current-song">{currentSong}</b>
					</div>
				</div>
				<div className="songs">
					{songs}
				</div>
			</div>
		);
	}
}

export default Player;
