import React from "react";
import {
  NotFound,
  Home,
  // Navbar,
  UserDashboard,
  AdminDashboard,
  Auth,
} from "./Components";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

const Routes: React.FC<any> = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" render={(props: any) => <Home />} />
        {/* If User */}
        <Route
          exact
          path="/dashboard"
          render={(props: any) => <UserDashboard />}
        />
        {/* If Admin */}
        {/* <Route
          exact
          path="/dashboard"
          render={(props: any) => <AdminDashboard />}
        /> */}
        <Route
          exact
          path="/login"
          render={(props: any) => <Auth type="login" />}
        />
        <Route
          exact
          path="/register"
          render={(props: any) => <Auth type="register" />}
        />
        <Route path="/404" render={(props: any) => <NotFound />} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default Routes;
