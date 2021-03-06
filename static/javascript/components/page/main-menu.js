import React, { Fragment } from "react";
import cn from "classnames";
import { NavLink, matchPath } from "react-router-dom";

export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { pathname } = this.props.location;

    return (
      <Fragment>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a className="navbar-brand" href="https://github.com/artyomtrityak/d3-explorer">
            D3 Explorer
          </a>
          <ul className="navbar-nav">
            <li className={cn("nav-item", { active: matchPath(pathname, { path: "/bar" }) || pathname === "/" })}>
              <NavLink activeClassName="disabled" className="nav-link" to="/bar">
                Bar charts
              </NavLink>
            </li>

            <li className={cn("nav-item", { active: matchPath(pathname, { path: "/pie" }) })}>
              <NavLink activeClassName="disabled" className="nav-link" to="/pie">
                Pie charts
              </NavLink>
            </li>

            <li className={cn("nav-item", { active: matchPath(pathname, { path: "/line" }) })}>
              <NavLink activeClassName="disabled" className="nav-link" to="/line">
                Line charts
              </NavLink>
            </li>

            <li className={cn("nav-item", { active: matchPath(pathname, { path: "/tree" }) })}>
              <NavLink activeClassName="disabled" className="nav-link" to="/tree">
                Tree charts
              </NavLink>
            </li>

            {/* <li className={cn("nav-item", { active: matchPath(pathname, { path: "/force" }) })}>
              <NavLink activeClassName="disabled" className="nav-link" to="/force">
                Force charts
              </NavLink>
            </li> */}

            <li className={cn("nav-item", { active: matchPath(pathname, { path: "/3d" }) })}>
              <NavLink activeClassName="disabled" className="nav-link" to="/3d">
                3D charts
              </NavLink>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}
