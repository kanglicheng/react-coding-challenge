import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/Presentational/HomePage';
import Series from './components/Containers/Series';
import Movies from './components/Containers/Movies';


export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/series" component={Series} />
                        <Route path="/movies" component={Movies} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
