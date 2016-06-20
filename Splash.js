import React from 'react';
import { Link } from 'react-router'

function Splash(props) {
    return (<div className="splash">
      <Link to="main"><img height="100%" src="img/Nokia-1.jpg" alt="Princess Nokia"/></Link>
    </div>);
}

export default Splash
