import React from 'react';
import Home from './view/Home';
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
            <Redirect to={"/home"} />
          </Switch>
        </HashRouter>
      </Provider>
    </>
  );
}

export default App;
