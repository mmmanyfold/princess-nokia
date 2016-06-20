import React from 'react';

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
                <img width="50px" src="img/flag.png"/>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="main_navbar">
            <ul className="nav navbar-nav">
              <li className="active"><img className="nav_shop" src="img/menu_shop.png"/></li>
              <li><img className="nav_tour" src="img/menu_tour.png"/></li>
              <li><img className="nav_music" src="img/menu_music.png"/></li>
              <li><img className="nav_art" src="img/menu_art.png"/></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="name"><img width="85%" src="img/princess-nokia.png"/></div>
      <div className="flag"><img src="img/flag.png"/></div>
      <div className="abstract"><img src=""/></div>
    </div>)
}

export default Main
