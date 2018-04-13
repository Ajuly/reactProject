import React from "react";
import { render } from "react-dom";

import Home from "./containers/Home/index";
import Profile from "./containers/Profile/index";
import Lesson from "./containers/Lesson/index";
import TabBar from "./components/TabBar/TabBar";
import Login from "./containers/Login/Login";
import Reg from "./containers/Reg/index"

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";

import "./common/index.less";

render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/lesson" component={Lesson} />
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
        </Switch>
        <TabBar />
      </div>
    </Router>
  </Provider>,
  document.getElementById("app")
);
