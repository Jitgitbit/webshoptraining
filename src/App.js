
import React from "react";
import { Switch, Route } from "react-router-dom";
import DevelopersList from "./components/DevelopersList";
import Homepage from "./components/Homepage";
import "./App.css";
import Toolbar from "./components/Toolbar";
import PostPage from "./components/PostPage";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Toolbar/>
        <Switch>
          <Route path="/developers" component={DevelopersList} />
          <Route path="/read/:id" component={PostPage} />
          <Route component={Homepage} />
        </Switch>
      </div>
    );
  }
}
