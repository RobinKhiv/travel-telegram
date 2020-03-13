import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import Navigation from './Navigation';
import About from '../../react_routes/About';
import Blog from '../../react_routes/Blog';
import Home from '../../react_routes/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../../css/App.css';

export default class App extends React.Component {
    render() {
        return (
           <BrowserRouter>
                <Navigation/>
                <main>
                    <Banner/>
                    <Switch>
                        <Route exact path={'/'} component={Home}/> 
                        <Route path={'/about'} component={About}/> 
                        <Route path={'/blog/:blog_id'} component={Blog}/>
                    </Switch>
                </main>
           </BrowserRouter>
        );
    }
}

ReactDOM.render( <App />, document.getElementById('app-root'));
