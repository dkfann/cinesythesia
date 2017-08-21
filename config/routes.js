import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import MainContainer from '../containers/MainContainer';
import HomeContainer from '../containers/HomeContainer';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={ MainContainer }>
            <IndexRoute component={ HomeContainer }/>
        </Route>
    </Router>
);
