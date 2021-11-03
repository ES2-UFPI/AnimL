import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home';
import Releases from './pages/releases';
import AnimePage from './pages/anime';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/releases" exact component={Releases}></Route>
                <Route path="/anime/id" exact component={AnimePage}></Route>
            </Switch>
        </BrowserRouter>
    )
}