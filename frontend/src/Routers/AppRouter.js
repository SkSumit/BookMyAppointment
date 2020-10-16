import React from "react";
import { Router, Route,Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import Header from "../components/Header";
import IndexPage from "../components/Pages/IndexPage";
import AdminDashboardPage from "../components/Pages/AdminDashboardPage";
import StatusPage from "../components/Pages/StatusPage";
import EditPage from "../components/Pages/EditPage";
import LoginPage from "../components/Pages/LoginPage";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
  <Header auth={true} />
  <Switch>
   
    <Route path="/" exact={true} component={IndexPage} />
    <Route path="/status" exact={true}  component={StatusPage} />
    <Route path={"/status/:id"} component={StatusPage} />
    <Route path="/login" exact component={LoginPage} />
    <PrivateRoute path="/dashboard"   component={AdminDashboardPage} />

    <Redirect from="/edit" to="/dashboard" exact />
    
    <PrivateRoute path="/edit/:id" component={EditPage} />
    </Switch>
  </Router>
);

export default AppRouter;
