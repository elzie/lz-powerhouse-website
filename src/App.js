import React from 'react';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Frontpage from './pages/Frontpage';
import About from './pages/About';
import TheGym from './pages/TheGym';
import SportsNutrition from './pages/SportsNutrition';
import Contact from './pages/Contact';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  // background: papayawhip;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <AppContainer>
        <Router>
          <Navigation />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Frontpage {...props} />}
            />
            <Route
              exact
              path="/about"
              render={(props) => <About {...props} />}
            />
            <Route
              exact
              path="/the-gym"
              render={(props) => <TheGym {...props} />}
            />
            <Route
              exact
              path="/sports-and-nutrition"
              render={(props) => <SportsNutrition {...props} />}
            />
            <Route
              exact
              path="/contact"
              render={(props) => <Contact {...props} />}
            />
          </Switch>
        </Router>
      </AppContainer>
    );
  }
}
export default App;
