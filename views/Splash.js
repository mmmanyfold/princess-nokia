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
    }

    render() {
        const carOffset = 100;
        const imageSize = 2864 / 1.45;
        return (
        <div>
          <div className="splash">
            <img className="splash-img" src={splash1}/>
            <img className="splash-img" src={splash2}/>
            <img className="splash-img" width="706" height="1080" src={splash3} useMap="#splash3" name="splash3"/>
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
          </div>

          <img id="splash-car" height="10%" src={car}
               style={{left: this.state.carLeftPosition + carOffset}}/>
        </div>);
    }
}

export default Splash
