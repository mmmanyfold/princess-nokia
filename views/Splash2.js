import React, {Component} from 'react';
import { Link } from 'react-router'; //react.LINK
import $ from 'jquery';
import Music from  './Music';
import imageMapResize from 'image-map-resizer';

const splash = require('../img/splash/vertical/splash.jpg');
const arrow = require('../img/splash/vertical/arrow.jpg');
const go = require('../img/splash/vertical/go.png');
const stop = require('../img/splash/vertical/stop.png');
const download = require('../img/splash/vertical/download.jpg');

const tomboy = require('../img/splash/lyrics-tomboy.png');
const kitana = require('../img/splash/lyrics-kitana.png');
const bruja = require('../img/splash/lyrics-bruja.png');
const saggy = require('../img/splash/lyrics-saggy.png');
const mine = require('../img/splash/lyrics-mine.png');
const excellent = require('../img/splash/lyrics-mine.png');
const bart = require('../img/splash/lyrics-bart.png');

const Hovers = {
  Arrow: [download]
};

class Splash2 extends Component {

    constructor() {
        super();
        this.state = {
            Arrow: Hovers.Arrow[0]
        };
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(type, n) {
        this.setState({[type]: Hovers[type][n]});
    }

    componentDidMount() {
        imageMapResize();
    }

    render() {
        return (
        <div className="splash2">
          <div className="flex-column">
            <div className="flex-col-item1">
              <img className="main" src={splash}/>
            </div>
            <div className="flex-col-item2">
              <div className="flex-row buttons">
                <div className="flex-row-item"></div>
                <div className="flex-row-item download">
                  <a className="hvr-icon-down" href="https://s3.amazonaws.com/princess-nokia/album.zip">
                    <img src={download}/>
                  </a>
                </div>
                <div className="flex-row-item arrow">
                  <a href="/site">
                    <img src={arrow}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Music/>
        </div>);
    }
}

export default Splash2
