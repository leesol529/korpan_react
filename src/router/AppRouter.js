import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../component/Home';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Home} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;