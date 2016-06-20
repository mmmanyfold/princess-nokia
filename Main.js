import React from 'react';
var flag = require('./img/flag.png');
var menu_shop = require('./img/menu_shop.png');
var menu_tour = require('./img/menu_tour.png');
var menu_music = require('./img/menu_music.png');
var menu_art = require('./img/menu_art.png');
var princessNokia = require('./img/princess-nokia.png');

function Main(props) {
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
              <li className="active"><img className="nav_shop" src={menu_shop}/></li>
              <li><img className="nav_tour" src={menu_tour}/></li>
              <li><img className="nav_music" src={menu_music}/></li>
              <li><img className="nav_art" src={menu_art}/></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="name"><img width="85%" src={princessNokia}/></div>
      <div className="flag"><img src={flag}/></div>
    </div>)
}

export default Main
