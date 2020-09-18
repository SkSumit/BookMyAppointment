import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "../components/Header";
import IndexPage from "../components/Pages/IndexPage";
import AdminDashboardPage from "../components/Pages/AdminDashboardPage";
const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Route path="/" exact component={IndexPage} />
    <Route path="/dashboard" component={AdminDashboardPage} />
  </BrowserRouter>
);

export default AppRouter;
