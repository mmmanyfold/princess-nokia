import Splash from './views/Splash';
import AppContainer from './AppContainer';
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
        <IndexRoute component={Splash}/>
        <Route path="/site" component={AppContainer}>
            <IndexRoute component={Main}/>
            <Route path="/main" component={Main}/>
            <Route path="/music" component={Music}/>
            <Route path="/tour" component={Tour}/>
        </Route>
    </Route>
</Router>);


export default routes;
