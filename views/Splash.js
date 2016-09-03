import React, {Component} from 'react';
import { Link } from 'react-router'; //react.LINK
import $ from 'jquery';
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

const booklet1 = require('../img/splash/1992__albumcover.jpg');
const booklet2 = require('../img/splash/1992__tracklist.jpg');
const booklet3 = require('../img/splash/1992_a.jpg');
const booklet4 = require('../img/splash/1992_b.jpg');
const booklet5 = require('../img/splash/1992_c.jpg');
const booklet6 = require('../img/splash/1992_d.jpg');
const booklet7 = require('../img/splash/1992_e.jpg');
const booklet8 = require('../img/splash/1992_f.jpg');
const booklet9 = require('../img/splash/1992_g.jpg');
const booklet10 = require('../img/splash/1992_h.jpg');
const booklet11 = require('../img/splash/1992_i.jpg');
const booklet12 = require('../img/splash/1992_j.jpg');
const booklet13 = require('../img/splash/1992_k.jpg');

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
          <div id="booklet">
            <Carousel data-ride="carousel" slide={true} indicators={true} controls={true} interval={10000}>
                <Carousel.Item>
                  <img src={booklet1}/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={booklet2}/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={booklet3}/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={booklet4}/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={booklet5}/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={booklet6}/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={booklet7}/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={booklet8}/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={booklet9}/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={booklet10}/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={booklet11}/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={booklet12}/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={booklet13}/>
                </Carousel.Item>
            </Carousel>
          </div>
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
