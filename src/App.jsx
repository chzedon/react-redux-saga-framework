import React from 'react';
import Home from './view/Home';
import Markdown from "./view/Markdown";
import Music from "./view/Music";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux"
import store from "store";

function App() {
  return (
    <>
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/markdown" component={Markdown} />
            <Route path="/music" component={Music} />
            <Redirect to={"/home"} />
          </Switch>
        </HashRouter>
      </Provider>
    </>
  );
}

export default App;
