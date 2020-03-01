import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom';

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

ReactDOM.render( <App />, document.getElementById('app-root')
);
