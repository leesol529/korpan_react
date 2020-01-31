import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../component/Home';
import Header from '../component/Header';
import Navigation from '../component/Navigation';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Navigation />
            <Switch>
                <Route path="/" component={Home} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;