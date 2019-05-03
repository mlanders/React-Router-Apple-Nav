import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';

class App extends Component {
    render() {
        return (
            <div className="NavWrapper">
                <Nav />
            </div>
        );
    }
}

export default App;
