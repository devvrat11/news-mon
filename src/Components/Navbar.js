import PropTypes from "prop-types";
import React, { Component } from "react";
import {Link} from 'react-router-dom'
// export class Navbar extends Component 
const Navbar=(props)=>
{
  // static propTypes = {};

    return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Newsmon
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/general">
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="buisness">
                Buisness
              </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
              </li>
          </ul>
        </div>
      </nav>
    </div>
    )
}

export default Navbar;
