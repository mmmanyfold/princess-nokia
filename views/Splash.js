import React, {Component} from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import Music from  './Music';

const splash = require('../img/splash/splash.jpg');
const car = require('../img/splash/car.png');

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
        return (<div className="splash">
            <img ref="imgRef" id="splash-img" height="100%" src={splash}/>
            <img id="splash-car" height="10%" src={car}
                 style={{left: this.state.carLeftPosition + carOffset}}/>
            <Music left={imageSize}/>
        </div>);
    }
}

export default Splash
