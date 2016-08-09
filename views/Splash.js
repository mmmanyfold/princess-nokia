import React, {Component} from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import Music from  './Music';

const splash = require('../img/splash/splash.jpg');
const car = require('../img/splash/car.png');

const splash1 = require('../img/splash/splash1.jpg');
const splash2 = require('../img/splash/splash2.gif');
const splash3 = require('../img/splash/splash3.jpg');

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
const cover4 = require('../img/splash/cover4.jpg');

class Splash extends Component {

    constructor() {
        super();
        this.state = {
            carLeftPosition: 0
        };
    }

    componentDidMount() {
        $(window).scroll(e => {
            // trigger event here
            this.setState({
                carLeftPosition: $('body').scrollLeft(),
            });
        });

        $('.carousel').carousel("pause");
        $(".carousel").hover(
          function() {
            $(".carousel").carousel("next");
            $(".carousel").carousel("cycle");
          }, function() {
            $(".carousel").carousel("pause");
          });
    }

    render() {
        const carOffset = 100;
        return (
        <div>
          <div className="splash">
            <div><img className="splash-img" src={splash1}/></div>
            <div><img className="splash-img" src={splash2}/></div>
            <div><img className="splash-img" width="706" height="1080" src={splash3} useMap="#splash3" name="splash3"/></div>
            <div id="lyrics">
              <img src={tomboy}/>
              <img src={kitana}/>
              <img src={bruja}/>
              <img src={saggy}/>
              <img src={mine}/>
              <img src={excellent}/>
              <img src={bart}/>
            </div>
            <Music/>
            <div className="carousel" data-interval="2500">
              <div className="carousel-inner">
                <div className="item active"><img className="cover" src={cover1}/></div>
                <div className="item"><img className="cover" src={cover2}/></div>
                <div className="item"><img className="cover" src={cover3}/></div>
                <div className="item"><img className="cover" src={cover4}/></div>
              </div>
            </div>
          </div>
          <img id="splash-car" height="10%" src={car}
               style={{left: this.state.carLeftPosition + carOffset}}/>
        </div>);
    }
}

export default Splash
