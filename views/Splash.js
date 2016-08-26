import React, {Component} from 'react';
import { Link } from 'react-router'; //react.LINK
import $ from 'jquery';
import Music from  './Music';
import imageMapResize from 'image-map-resizer';

const car = require('../img/splash/car.png');
const rocket = require('../img/splash/rocket.png');

const splash1a = require('../img/splash/splash1a.jpg');
const splash1b = require('../img/splash/splash1b.jpg');
const splash2 = require('../img/splash/splash2.jpg');
const splash2_album = require('../img/splash/splash2-hover-album.jpg');
const splash2_lyrics = require('../img/splash/splash2-hover-lyrics.jpg');
const splash3 = require('../img/splash/splash3.jpg');

const Hovers = {
  Splash2: [splash2, splash2_album, splash2_lyrics]
};

const tomboy = require('../img/splash/lyrics-tomboy.png');
const kitana = require('../img/splash/lyrics-kitana.png');
const bruja = require('../img/splash/lyrics-bruja.png');
const saggy = require('../img/splash/lyrics-saggy.png');
const mine = require('../img/splash/lyrics-mine.png');
const excellent = require('../img/splash/lyrics-mine.png');
const bart = require('../img/splash/lyrics-bart.png');

const cover1 = require('../img/splash/cover1.jpg');
const cover2 = require('../img/splash/cover2.jpg');
const cover3 = require('../img/splash/cover3.jpg');

class Splash extends Component {

    constructor() {
        super();
        this.state = {
            carLeftPosition: 0,
            Splash2: Hovers.Splash2[0]
        };
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(type, n) {
        this.setState({[type]: Hovers[type][n]});
    }

    handleShowLyrics() {
        $('#lyrics').toggle('slide');
    }

    componentDidMount() {
        $(window).scroll(e => {
            // trigger event here
            this.setState({
                carLeftPosition: $('body').scrollLeft(),
            });
        });

        imageMapResize();

        $(".carousel").hover(function() {
          $(".carousel").carousel("next");
        });

        // init controller
        const controller = new ScrollMagic.Controller({vertical: false});
	    const tween = TweenMax.to(".rocket-container", 0.5, {bottom: "+=500", top: "-100"});
	    const tween2 = TweenMax.to(".rocket-container", 0.5, {top: "-=500"});

        // create a scene
        const t = new ScrollMagic.Scene({
        	triggerElement: "#splash2",
	        duration: 1000
        }).setTween(tween).addTo(controller); // assign the scene to the controller

        const w = new ScrollMagic.Scene({
            triggerElement: "#tomboy",
            duration: 1000
        }).setTween(tween2).addTo(controller);
    }

    render() {
        const carOffset = 100;
        return (
        <div>
          <div className="splash">
            <img id="splash-car" height="10%" src={car}
                 style={{left: this.state.carLeftPosition + carOffset}}/>
            <img className="splash-img" src={splash1a}/>
            <div className="splash-player">
              <img className="splash-img" src={splash1b}/>
              <Music/>
            </div>
            <div className="carousel" data-interval="2500">
              <div className="carousel-inner">
                <div className="item active"><img className="cover" src={cover1}/></div>
                <div className="item"><img className="cover" src={cover2}/></div>
                <div className="item"><img className="cover" src={cover3}/></div>
              </div>
            </div>
            <img className="splash-img" width="706" height="1080" src={this.state.Splash2} useMap="#splash2" id="splash2"/>
            <map name="splash2">
              <area shape="rect" coords="242,750,699,817" href="https://s3.amazonaws.com/princess-nokia/album.zip"
                    onMouseOver={this.handleHover.bind(this, "Splash2", 1)}
                    onMouseOut={this.handleHover.bind(this, "Splash2", 0)}/>
              <area shape="rect" coords="507,902,698,983" href="#"
                    onMouseOver={this.handleHover.bind(this, "Splash2", 2)}
                    onMouseOut={this.handleHover.bind(this, "Splash2", 0)}
                    onClick={this.handleShowLyrics}/>
            </map>
            <div id="lyrics">
              <img src={tomboy}/>
              <img src={kitana}/>
              <img src={bruja}/>
              <img src={saggy}/>
              <img src={mine}/>
              <img src={excellent}/>
              <img src={bart}/>
            </div>
              <div style={{width:350}}>
                <div className="rocket-container">
                  <img id="rocket" src={rocket}/>
                </div>
              </div>
            <img id="tomboy" className="splash-img" src={splash3}/>
          </div>
        </div>);
    }
}

export default Splash
