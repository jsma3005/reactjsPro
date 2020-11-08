import React from 'react';
import cls from './App.module.scss';
import HomePage from './pages/Home/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Pokedes from './pages/Pokedes/Pokedes';

const App = () => {
  return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/pokedes" component={Pokedes} />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
