import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "../components/Header";
import IndexPage from "../components/Pages/IndexPage";
import AdminDashboardPage from "../components/Pages/AdminDashboardPage";
import StatusPage from "../components/Pages/StatusPage";
const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Route path="/" exact component={IndexPage} />
    <Route path="/dashboard" component={AdminDashboardPage} />
    <Route path="/status" exact component={StatusPage} />
    <Route path="/status/:id" component={StatusPage} />
  </BrowserRouter>
);

export default AppRouter;
