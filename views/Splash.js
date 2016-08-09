import React, {Component} from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import Music from  './Music';

const splash = require('../img/splash/splash.jpg');
const car = require('../img/splash/car.png');

const splash1 = require('../img/splash/splash1.jpg');
const splash2 = require('../img/splash/splash2.gif');
const splash3 = require('../img/splash/splash3.jpg');

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
            <img width="706" height="1080" src={splash3} useMap="#splash3" name="splash3"/>
            <div className="splash-with-player">
              <Music/>
            </div>
          </div>
          <img id="splash-car" height="10%" src={car}
               style={{left: this.state.carLeftPosition + carOffset}}/>
        </div>);
    }
}

export default Splash
