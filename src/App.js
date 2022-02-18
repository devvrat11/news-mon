import './App.css';
// API key : 206bf376d61949d9823cd9b1155c3093
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      <div>
      <Navbar/>
      <Routes>
      <Route exact path = "/"               element = {<News key="general" pageSize={6} country="in" category="general"/>      }/>
      <Route exact path = "/science"        element = {<News key="science" pageSize={6} country="in" category="science"/>      }/>
      <Route exact path = "/techology"      element = {<News key="techology" pageSize={6} country="in" category="techology"/>    }/>
      <Route exact path = "/health"         element = {<News key="health" pageSize={6} country="in" category="health"/>       }/>
      <Route exact path = "/general"        element = {<News key="general" pageSize={6} country="in" category="general"/>      }/>
      <Route exact path = "/entertainment"  element = {<News key="entertainment" pageSize={6} country="in" category="entertainment"/>}/>
      <Route exact path = "/buisness"       element = {<News key="buisness" pageSize={6} country="in" category="buisness"/>     }/>
      <Route exact path = "/sports"         element = {<News key="sports" pageSize={6} country="in" category="sports"/>       }/>
      </Routes>
      </div>
      </Router>
      </>
    )
  }
}
