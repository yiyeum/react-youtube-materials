import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Form, Home } from './containers'
import { DEFAULT_URL, FORM_URL } from './constants';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={DEFAULT_URL} exact><Home /></Route>
        <Route path={FORM_URL}><Form /></Route>
      </Switch>
    </Router>
  );
}

export default App;
