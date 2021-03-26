import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import Users from "./user/pages/Users";
import MainNavigation from "./shared/components/Navigaition/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' exact>
            <Users />
          </Route>
          <Route path='/:userId/places' exact>
            <UserPlaces />
          </Route>
          <Route path='/places/new' exact>
            <NewPlace />
          </Route>
          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
