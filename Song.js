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
        return (
            <div className="Song">
                <b className="title">{this.props.title}</b>
                -------
                <button
                    type="button"
                    onClick={this.handleToggle}>
                    <i className={
                    classNames({
                    'fa fa-play-circle': !this.props.playing,
                    'fa fa-pause-circle': this.props.playing}) } aria-hidden="true"></i>
                </button>
                <Audio src={this.props.src}
                       playing={this.props.playing}
                       onEnd={this.props.onEnd}/>
            </div>
        );
    }
}

export default Song;