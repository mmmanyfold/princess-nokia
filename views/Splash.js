import React, {Component} from 'react';
import { Link } from 'react-router'; //react.LINK
import Music from  './Music';
import imageMapResize from 'image-map-resizer';
import {Carousel} from 'react-bootstrap';

const splash1 = require('../img/splash/vertical/splash1.jpg');
const splash2 = require('../img/splash/vertical/splash2.jpg');
const splash3 = require('../img/splash/vertical/splash3.jpg');
const arrow = require('../img/splash/vertical/arrow.jpg');
const go = require('../img/splash/vertical/go.png');
const stop = require('../img/splash/vertical/stop.png');
const download = require('../img/splash/vertical/download.jpg');

const tomboy = require('../img/splash/lyrics-tomboy.png');
const kitana = require('../img/splash/lyrics-kitana.png');
const bruja = require('../img/splash/lyrics-bruja.png');
const saggy = require('../img/splash/lyrics-saggy.png');
const green = require('../img/splash/lyrics-greenline.png');
const mine = require('../img/splash/lyrics-mine.png');
const excellent = require('../img/splash/lyrics-excellent.png');
const bart = require('../img/splash/lyrics-bart.png');

const Hovers = {
  Arrow: [download]
};

class Splash extends Component {

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
        <div className="splash">
          <div className="flex-column">
            <div className="flex-col-item1">
              <Carousel data-ride="carousel" slide={false} indicators={false} controls={false} interval={2000}>
                  <Carousel.Item>
                    <img src={splash1}/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={splash2}/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={splash3}/>
                  </Carousel.Item>
              </Carousel>
            </div>
            <div className="flex-col-item2">
              <div className="flex-row links">
                <div className="flex-row-item down">
                  <i className="fa fa-angle-double-down" aria-hidden="true"></i>
                  <span>scroll for lyrics</span>
                </div>
                <div className="flex-row-item download">
                  <a className="hvr-icon-down" href="https://s3.amazonaws.com/princess-nokia/album.zip">
                    <span>Download Album</span>
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
          <div id="lyrics">
            <img src={bart}/>
            <img src={tomboy}/>
            <img src={kitana}/>
            <img src={bruja}/>
            <img src={saggy}/>
            <img src={green}/>
            <img src={mine}/>
            <img src={excellent}/>
          </div>
        </div>);
    }
}

export default Splash
