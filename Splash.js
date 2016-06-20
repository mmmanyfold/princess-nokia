import React from 'react';
import { Link } from 'react-router'
var nokia1 = require('./img/Nokia-1.jpg');

function Splash(props) {
    return (<div className="splash">
      <Link to="main"><img height="100%" src={nokia1} alt="Princess Nokia"/></Link>
    </div>);
}

export default Splash
