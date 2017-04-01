import React, { Component } from 'react';
import Home from './container/Home';
import Registration from './container/Registration';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import NavbarMain from "./components/NavbarMain";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div>

          <NavbarMain>
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/registration" className="nav-link">Cadastro</Link>
            </li>
          </NavbarMain>

          <div className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/registration" component={Registration}/>
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
