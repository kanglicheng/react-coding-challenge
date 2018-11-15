import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/Presentational/HomePage';
import Series from './components/Containers/Series';
import Movies from './components/Containers/Movies';


export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route
                        path="/series"
                        render={props => <Series {...props} route="Series" />}
                    />
                    <Route
                        path="/movies"
                        render={props => <Movies {...props} route="Movies" />}
                    />
                </Switch>
            </div>
        </BrowserRouter>
    );
}
