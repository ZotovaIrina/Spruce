import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import {
    Provider
} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';

import store from './store/store';
import './App.css';
import SearchHotels from './pages/SearchHotels';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="container">
                        <Route exact path="/" component={SearchHotels}></Route>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
