import React from "react";
import { Route, Switch } from "react-router";
import Homepage from "./pages/Homepage";
import Userpage from "./pages/Userpage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/user/:id" component={Userpage} />
    </Switch>
  );
};

export default App;
