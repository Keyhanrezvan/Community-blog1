
import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./common/Header";
import NotFound from "./common/NotFound";
import CardList from "./home/CardList";
import User from "./user/User";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/users/:userId">
          <User />
        </Route>
        <Route exact path="/">
          <CardList />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;