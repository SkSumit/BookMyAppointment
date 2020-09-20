import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./common/Typography";
class Header extends Component {
  toggleNavbar = (e) => {
    document
      .querySelector(".navbar-burger.burger")
      .classList.toggle("is-active");
    document.querySelector(".navbar-menu").classList.toggle("is-active");
  };
  render() {
    return (
      <div>
        <nav
          className="navbar is-spaced "
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <div className="navbar-item">
              <NavLink activeClassName="is-active" to="/">
                <h3 className="title is-3 ">BYO</h3>
              </NavLink>
            </div>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={this.toggleNavbar}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item ">
                <NavLink
                  className="navlink has-text-black"
                  activeClassName="navlink has-text-danger"
                  exact
                  to="/"
                >
                  Book
                </NavLink>
              </div>
              <div className="navbar-item">
                <NavLink
                  to="/dashboard"
                  className="navlink has-text-black"
                  activeClassName="navlink has-text-danger"
                >
                  Dashboard
                </NavLink>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <Button
                  text={"Logout"}
                  rounded={true}
                  bgColor={"danger"}
                  txtColor={"white"}
                  isSemiBold={true}
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
