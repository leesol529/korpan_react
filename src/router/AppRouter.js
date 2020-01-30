import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../component/Home';
import Header from '../component/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;