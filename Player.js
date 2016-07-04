import React, {Component} from 'react';
import Song from './Song';
import R from 'ramda';
import axios from 'axios';

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
	}

	songUrl(name) {
		return `http://princess-nokia.s3-website-us-east-1.amazonaws.com/${name}`;
	}

	shush(index, state) {
		this.setState({
			current: index,
			songs: R.update(index, state,
				R.times(() => false, this.state.count))
		})
	}

	playNext() {
		this.setState({
			current: this.state.current += 1,
			songs: R.times(() => false, this.state.count)
		});
		let next = this.state.current % this.state.count;
		// loop through all songs once
		if (this.state.count !== this.state.current) {
			this.shush(next, true, R.times(() => false, this.state.count))
		}
	}

	componentWillMount() {
		axios.get('http://princess-nokia-api.apps.aterial.org/api/music')
			.then(res => {
				const data = res.data['princess-nokia'];
				const count = data.length;
				this.setState({
					count,
					titles: R.pluck('key')(data),
					// * initialize all as not playing
					songs: R.times(() => false, count)
				});
			})
			.catch(err => console.log(err));
	}



	render() {
		const songs = R.times((i) => {
			return <Song key={i}
			             id={i}
			             src={this.songUrl(this.state.titles[i])}
			             title={this.state.titles[i]}
			             playing={this.state.songs[i]}
			             shush={this.shush}
			             onEnd={this.playNext}/>;
		}, this.state.count);

		return (<div className="Player">
			{songs}
		</div>);
	}
}

export default Player;