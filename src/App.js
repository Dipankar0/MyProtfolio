import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProjectSummery from './components/ProjectSummary';
import BloodSource from './components/BloodSource';
import Navbar from './components/Navbar';
import FindContact from './components/FindContact';
import Halal from './components/Halal';
import BazarBilas from './components/BazarBilas';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projectsummary' component={ProjectSummery} />
          <Route exact path='/bloodsource' component={BloodSource} />
          <Route exact path='/bazarbilas' component={BazarBilas} />
          <Route exact path='/findcontact' component={FindContact} />
          <Route exact path='/halalproduct' component={Halal} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
