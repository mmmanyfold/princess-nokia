// components
import Splash from './Splash';
import Main from './Main';
import AppContainer from './AppContainer';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router'

// router
// * with duplicate routes for github pages
const routes = (<Router history={browserHistory}>
    <Route path='/' component={AppContainer}>
        <IndexRoute component={Splash}/>
        <Route path="/main" component={Main}/>
    </Route>
    <Route path='/princess-nokia' component={AppContainer}>
        <IndexRoute component={Splash}/>
        <Route path="/main" component={Main}/>
    </Route>
</Router>);


export default routes;