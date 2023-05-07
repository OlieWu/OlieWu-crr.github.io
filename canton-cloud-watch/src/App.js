import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Login from './components/Login.js';
import Map from './components/Map.js';
import MapHTML from 'html-loader!./components/MapHTML.html';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
/* eslint import/no-webpack-loader-syntax: off */
import InnerHTML from 'dangerously-set-html-content'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Navbar>hi</Navbar>
            {/* <div dangerouslySetInnerHTML={{ __html: MapHTML }}></div>; */}
            <InnerHTML html={MapHTML} />
          </Route>
          <Redirect from="/" to="/login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
