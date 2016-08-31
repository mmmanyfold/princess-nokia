import React, {Component} from 'react';
import Audio from 'react-howler';

class Song extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (<Audio src={this.props.src}
		               playing={this.props.playing}
		               onEnd={this.props.onEnd}
		               onLoad={this.props.onLoad}/>);
	}
}

export default Song;
