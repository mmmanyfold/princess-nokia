import React, {Component} from 'react';
import Audio from 'react-howler';
import classNames from 'classnames';


class Song extends Component {
	constructor(props) {
		super(props);
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle() {
		// tell the others to shush!
		this.props.shush(this.props.id, !this.props.playing);
	}

	render() {
		const title = this.props.title.split('.')[0];
		return (
			<div className="Song" onClick={this.handleToggle}>
				<i className="fa fa-music" aria-hidden="true"></i>
				<b className="title">{title}</b>
				<Audio src={this.props.src}
				       playing={this.props.playing}
				       onEnd={this.props.onEnd}/>
			</div>
		);
	}
}

export default Song;