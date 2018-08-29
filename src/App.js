import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import store from './store'

import NewTwoot from './components/NewTwoot'
import TwootList from './components/TwootList'
import ProfileCard from './components/ProfileCard'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">

          <AppBar position="sticky">
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit">
                Twooter
              </Typography>
            </Toolbar>
          </AppBar>

          <div className="body-container">
            <ProfileCard />
            <div className='main-column'>
              <NewTwoot />
              <TwootList />
            </div>
          </div>
        </div>

      </Provider>
    );
  }
}

export default App;
