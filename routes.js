import {Splash_1992} from './views/Splash_1992';
import {Splash_brujas} from './views/Splash_brujas';
import AppContainer from './AppContainer';
import SplashAppContainer from './SplashAppContainer';
import Main from './views/Main';
import Music from './views/Music';
import Tour from './views/Tour';
import Lyrics from './views/Lyrics';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

// router
// * with duplicate routes for github pages
const routes = (<Router history={browserHistory}>
    <Route path='/'>
        <IndexRoute component={Splash_brujas}/>
        <Route path="1992" component={Splash_1992}/>
        <Route path="brujas" component={Splash_brujas}/>
    </Route>
</Router>);


export default routes;
