import React, {Component} from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import Music from  './Music';

const splash = require('../img/splash/splash.jpg');
const car = require('../img/splash/car.png');

const splash1 = require('../img/splash/splash1.jpg');
const splash2 = require('../img/splash/splash2.jpg');
const splash3 = require('../img/splash/splash3.jpg');
const splash4 = require('../img/splash/splash4.jpg');
const splash5 = require('../img/splash/splash5.jpg');
const splash6 = require('../img/splash/splash6.jpg');

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
        <div className="splash">
          <div id="splash-img">
            <img src={splash1}/>
            <img src={splash2}/>
            <img src={splash3}/>
            <div className="splash-with-player">
              <Music/>
              <img src={splash4}/>
            </div>
            <img width="396" height="1080" src={splash5} useMap="#splash5" name="splash5"/>
            <img src={splash6}/>
          </div>
          <img id="splash-car" height="10%" src={car}
               style={{left: this.state.carLeftPosition + carOffset}}/>
        </div>);
    }
}

export default Splash
