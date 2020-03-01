import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import Navigation from './Navigation';
import About from '../../react_routes/About';
import Blog from '../../react_routes/Blog';
import Home from '../../react_routes/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default class App extends React.Component {
    render() {
        return (
           <BrowserRouter>
                <Navigation/>
                <Banner/>
                <Switch>
                    <Route exact path={'/'} component={Home}/> 
                    <Route path={'/blogTemplate'} component={Blog}/>
                    <Route path={'/about'} component={About}/> 
                </Switch>
           </BrowserRouter>
        );
    }
}

ReactDOM.render( <App />, document.getElementById('app-root'));
