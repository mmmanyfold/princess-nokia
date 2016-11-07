import React, {Component} from 'react';
import $ from 'jquery';
import { Link } from 'react-router'; //react.LINK

const logo = require('../img/splash-1992/logo.png');

let player;
let tvIsWaiting;
let playing = false;

let onYouTubeIframeAPIReady;
let onPlayerReady;
let tvOn;
let onPlayerStateChange;

export class Splash_brujas extends Component {
  componentDidMount () {
    $('.dim').hide();
    onYouTubeIframeAPIReady = function () {
        player = new YT.Player('player', {
          height: '394',
          width: '700',
          videoId: 'iUcAPCxrSQs',
          playerVars: { 'controls': 1, 'showinfo': 1, 'rel': 0 },
          events: { 'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange}
        });
    }

    onPlayerReady = function (event) {
        if (tvIsWaiting) {
            player.playVideo();
        }
    }

    tvOn = function () {
        tvIsWaiting = true;
    }

    onPlayerStateChange = function (event) {
        if(!playing){
            $('.dim').show();
            playing = true;
        }
    }

    setTimeout(() => {
      onYouTubeIframeAPIReady();
    }, 1000);
  }

  render() {
    return(
      <div className="splash-brujas">
        <div className="whiteout fadeOut">
        </div>
        <div className="logo-box fadeOut">
          <div className="logo fadeInDownOut">
            <img src={logo}/>
          </div>
        </div>
        <div className="dim"></div>
        <div className="tv fadeIn">
            <div id="player" className="tv__video"></div>
        </div>
        <div className="links">
          <Link to="/1992">1992</Link>
        </div>
      </div>
    )
  }
}
