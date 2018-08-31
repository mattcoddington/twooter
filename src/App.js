import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import NewTwoot from "./components/NewTwoot";
import TwootList from "./components/TwootList";
import ProfileCard from "./components/ProfileCard";
import Header from "./components/Header/";

const App = props => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="body-container">
          <ProfileCard />
          <div className="main-column">
            <NewTwoot />
            <TwootList />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
