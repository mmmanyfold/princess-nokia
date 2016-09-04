import React, {Component} from 'react';
import Audio from 'react-howler';

class Song extends Component {

	setSeek (pos) {
		this.audio.howler.seek(pos);
	}

	componentWillReceiveProps(props) {
		if (props.playing) {
			this.setSeek(0);
		}
	}

	render() {
		return (<Audio src={this.props.src}
		               playing={this.props.playing}
		               onEnd={this.props.onEnd}
		               onLoad={this.props.onLoad}
		               ref={(ref) => this.audio = ref}/>);
	}
}

export default Song;
