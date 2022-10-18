import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <h2>App.js</h2>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
