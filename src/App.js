import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactus from './components/Contactus/Contactus';

import About from './components/About/About';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Allcourses from './components/Allcourses/Allcourses';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/allcourse'>
            <Allcourses></Allcourses>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/contact'>
            <Contactus></Contactus>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
