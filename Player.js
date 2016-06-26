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
                         src={"https://s3.amazonaws.com/princess-nokia/music/song.wav?X-Amz-Date=20160626T000520Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=f431a2540c991aebd26fcc87b72c6eb90bc42a4f709c3670726bdcd27cf2d513&X-Amz-Credential=ASIAI4WFKIBGQ55UGHUA/20160626/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=FQoDYXdzEJf//////////wEaDLF8rbvx0xOr8VQAbSLHAbGHCni/goEwRnb0WX2oxxRoHR8vQJ51iNklCTCR5Tj1qVCyFJsZg7ho4QdqODVnDuuZWfT2%2BEOjp1d8QLqGoXyVntQSUDE4bukglmqRD3zAvXz4aPaY/vfX%2BDZgvP2i9etWWGQUB8nx7aIvr7nL2n1icDgMZmnBI4NIEETF0fzFGyHzC/7MQiy1RHPgws6SeQkIm5vz4vJupXFSa1dn8QB1aSTrwirAfmPF5XiY1LXcRvU8bR8GTA5dQwW/1m8kI2dqB985Uc4onYe8uwU%3D"}
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