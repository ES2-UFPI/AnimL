import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';


import Home from './pages/home';
import Releases from './pages/releases';
import Anime from './pages/anime';
import Favorites from './pages/favorites';
import Perfil from './pages/perfil';
import Cadastro from './pages/cadastro';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/releases" exact component={Releases}></Route>
                <Route path="/favorites" exact component={Favorites}></Route>
                <Route path="/anime/:animeId" exact component={Anime}></Route>
                <Route path="/login" exact component={Perfil}></Route>
                <Route path="/cadastro" exact component={Cadastro}></Route>
            </Switch>
        </BrowserRouter>
    )
}