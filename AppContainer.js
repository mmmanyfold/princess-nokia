import React from 'react';

const menu_shop = require('./img/menu_shop.png');
const menu_shop_ro = require('./img/menu_shop_ro.png');
const menu_tour = require('./img/menu_tour.png');
const menu_tour_ro = require('./img/menu_tour_ro.png');
const menu_music = require('./img/menu_music.png');
const menu_music_ro = require('./img/menu_music_ro.png');
const menu_art = require('./img/menu_art.png');
const menu_art_ro = require('./img/menu_art_ro.png');

const flag = require('./img/flag.png');
const princessNokia = require('./img/princess-nokia.png');

const Rollovers = {
    Shop: [menu_shop, menu_shop_ro],
    Tour: [menu_tour, menu_tour_ro],
    Music: [menu_music, menu_music_ro],
    Art: [menu_art, menu_art_ro]
};

// main app container
class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Shop: Rollovers.Shop[0],
            Tour: Rollovers.Tour[0],
            Music: Rollovers.Music[0],
            Art: Rollovers.Art[0]
        };
    }

    rollover(type, n) {
        this.setState({[type]: Rollovers[type][n]});
    }

    render() {
        return (<div>
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#main_navbar"
                            aria-expanded="false">
                            <img width="50px" src={flag}/>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="main_navbar">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <img className="nav_shop"
                                     src={this.state.Shop}
                                     onMouseOver={this.rollover.bind(this, "Shop", 1)}
                                     onMouseOut={this.rollover.bind(this, "Shop", 0)}/>
                            </li>
                            <li>
                                <img className="nav_tour"
                                     src={this.state.Tour}
                                     onMouseOver={this.rollover.bind(this, "Tour", 1)}
                                     onMouseOut={this.rollover.bind(this, "Tour", 0)}/>
                            </li>
                            <li>
                                <img className="nav_music"
                                     src={this.state.Music}
                                     onMouseOver={this.rollover.bind(this, "Music", 1)}
                                     onMouseOut={this.rollover.bind(this, "Music", 0)}/>
                            </li>
                            <li>
                                <img className="nav_art"
                                     src={this.state.Art}
                                     onMouseOver={this.rollover.bind(this, "Art", 1)}
                                     onMouseOut={this.rollover.bind(this, "Art", 0)}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                {this.props.children}
            </div>
            <div className="name"><img width="85%" src={princessNokia}/></div>
            <div className="flag"><img src={flag}/></div>
        </div>);
    }
}

export default AppContainer;