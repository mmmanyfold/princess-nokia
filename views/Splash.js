import React, {Component} from 'react';
import { Link } from 'react-router'; //react.LINK
import Music from  './Music';
import imageMapResize from 'image-map-resizer';
import {Carousel} from 'react-bootstrap';

const splash1 = require('../img/splash-1992/vertical/splash1.jpg');
const splash2 = require('../img/splash-1992/vertical/splash2.jpg');
const splash3 = require('../img/splash-1992/vertical/splash3.jpg');
const arrow = require('../img/splash-1992/vertical/arrow.jpg');
const logo = require('../img/splash-1992/logo.png');

const tomboy = require('../img/splash-1992/lyrics-tomboy.png');
const kitana = require('../img/splash-1992/lyrics-kitana.png');
const bruja = require('../img/splash-1992/lyrics-bruja.png');
const saggy = require('../img/splash-1992/lyrics-saggy.png');
const green = require('../img/splash-1992/lyrics-greenline.png');
const mine = require('../img/splash-1992/lyrics-mine.png');
const excellent = require('../img/splash-1992/lyrics-excellent.png');
const bart = require('../img/splash-1992/lyrics-bart.png');

const booklet1 = require('../img/splash-1992/1992__albumcover.jpg');
const booklet2 = require('../img/splash-1992/1992__tracklist.jpg');
const booklet3 = require('../img/splash-1992/1992_a.jpg');
const booklet4 = require('../img/splash-1992/1992_b.jpg');
const booklet5 = require('../img/splash-1992/1992_c.jpg');
const booklet6 = require('../img/splash-1992/1992_d.jpg');
const booklet7 = require('../img/splash-1992/1992_e.jpg');
const booklet8 = require('../img/splash-1992/1992_f.jpg');
const booklet9 = require('../img/splash-1992/1992_g.jpg');
const booklet10 = require('../img/splash-1992/1992_h.jpg');
const booklet11 = require('../img/splash-1992/1992_i.jpg');
const booklet12 = require('../img/splash-1992/1992_j.jpg');
const booklet13 = require('../img/splash-1992/1992_k.jpg');

const Hovers = {
  Arrow: [arrow]
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

    handleCarouselClick() {
      $(".carousel").carousel('next');
      $(".carousel").carousel('pause');
    }

    handleArrowClick() {
      alert("Full site coming soon :)");
    }

    handleDownloadClicks(event) {
      ga('send', 'event', {
        eventCategory: 'Download Link',
        eventAction: 'click',
        eventLabel: event.target.href
      });
    }

    render() {
        return (
        <div className="splash">
          <div className="whiteout fadeOut">
          </div>
          <div className="logo-box fadeOut">
            <div className="logo fadeInDownOut">
              <img src={logo}/>
            </div>
          </div>
          <div className="flex-column main">
            <div className="flex-col-item1 fadeIn">
                <Carousel id="booklet-carousel"
                  slide={true}
                  indicators={false}
                  controls={false}
                  interval={60000}
                  onClick={this.handleCarouselClick}>
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
            <div className="flex-col-item2 fadeIn">
              <div className="flex-row links">
                <div className="flex-row-item scrolldown">
                  <i className="fa fa-angle-double-down" aria-hidden="true"></i>
                  <span>scroll for lyrics</span>
                </div>
                <div className="flex-row-item download">
                  <a className="hvr-icon-down" onClick={this.handleDownloadClicks} href="https://s3.amazonaws.com/princess-nokia/PrincessNokia1992.zip">
                    <span>Download 1992</span>
                  </a>
                </div>
                <div className="flex-row-item arrow">
                  <a href="#" onClick={this.handleArrowClick}>
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
