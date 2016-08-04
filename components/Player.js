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
			current: 0
		}
		this.shush = this.shush.bind(this);
		this.playNext = this.playNext.bind(this);
		this.songUrl = this.songUrl.bind(this);
		this.handlePlayingCurrent = this.handlePlayingCurrent.bind(this);
	}

	songUrl(name) {
		return `http://princess-nokia.s3-website-us-east-1.amazonaws.com/${name}`;
	}

	handlePlayingCurrent() {
		console.log('called..');
		console.log(this.state);
		this.setState({
			current: this.state.current,
			songs: times(() => false, this.state.count)
		});
		if (this.state.count == this.state.current) {
			this.setState({
				current: 0
			});
		}
	}

	shush(index, state) {
		this.setState({
			current: index,
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

//
// <button
// type="button"
// className="btn btn-default"
// onClick={this.handleToggle}>
// <i className={
// 	classNames({
// 		'fa fa-play-circle': !this.props.playing,
// 		'fa fa-pause-circle': this.props.playing}) } aria-hidden="true"></i>
// </button>


	render() {
		const songs = times(i => {
			return <Song key={i}
			             id={i}
			             src={this.songUrl(this.state.titles[i])}
			             title={this.state.titles[i]}
			             playing={this.state.songs[i]}
			             shush={this.shush}
			             onEnd={this.playNext}/>;
		}, this.state.count);

		return (
			<div className="Player">
				<div className="current flex-row">
					<div className="player-state-button"
					     onClick={this.handlePlayingCurrent}>
						<i className="fa fa-play-circle fa-3x"></i>
					</div>
					<div className="current-title">
						<span>Princess Nokia</span>
						<br/>
						<span className="current-song">title</span>
					</div>
				</div>
				{songs}
			</div>
		);
	}
}

export default Player;