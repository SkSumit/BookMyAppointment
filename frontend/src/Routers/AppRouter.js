import React from "react";
import {Router, Route, Switch, useHistory } from "react-router-dom";
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
    <Route path="/" exact={true} component={IndexPage} />
    <Route path="/status" exact component={StatusPage} />
    <PublicRoute path="/login" exact component={LoginPage} />
    <Route path="/status/:id" component={StatusPage} />
    <PrivateRoute path="/dashboard" component={AdminDashboardPage} />
  
    <PrivateRoute path="/edit/:id" exact component={EditPage} />
    
  </Router>
);

export default AppRouter;
