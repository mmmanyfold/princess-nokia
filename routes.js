import Splash from './Splash';
import AppContainer from './AppContainer';
import Main from './Main';
import Music from './Music';
import Tour from './Tour';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

// router
// * with duplicate routes for github pages
const routes = (<Router history={browserHistory}>
    <Route path='/'>
        <IndexRoute component={Splash}/>
        <Route path="/site" component={AppContainer}>
            <IndexRoute component={Main}/>
            <Route path="/main" component={Main}/>
            <Route path="/music" component={Music}/>
            <Route path="/tour" component={Tour}/>
        </Route>
    </Route>
    <Route path='/princess-nokia'>
        <IndexRoute component={Splash}/>
        <Route path="/site" component={AppContainer}>
            <IndexRoute component={Main}/>
            <Route path="/main" component={Main}/>
            <Route path="/music" component={Music}/>
        </Route>
    </Route>
</Router>);


export default routes;
