import React, {Component} from 'react';
import Song from './Song';
import R from 'ramda';

// todo:
// [x] - make only one song play at the time
// [] - fetch songs from AWS

class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            songs : []
        }
        this.shush = this.shush.bind(this);
    }

    shush(but, state) {
        this.setState({
            songs: R.update(but, state, R.times(() => false, this.state.count))
        })
    }

    componentWillMount() {
        // probably call AWS S3 bucket here..
        const c = 5;
        this.setState({
            count : c,
            // * initialize all as not playing
            songs : R.times(() => false, c)
        });
    }

    render() {
        const songs = R.times((i) => {
            return <Song key={i}
                         id={i}
                         src={"./song.wav"}
                         title={ "song: " + i}
                         playing={this.state.songs[i]}
                         shush={this.shush}/>;
        }, this.state.count);
        
        return (<div className="Player">
            {songs}
        </div>);
    }
}

export default Player;