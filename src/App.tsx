import React from 'react'
import { BrowserRouter as Switch, Route, HashRouter } from 'react-router-dom'
import { Form, Home, Stopwatch, Context, Todo } from './containers'
import { DEFAULT_URL, FORM_URL, STOPWATCH_URL, CONTEXT_URL, REDUCER_URL } from './constants';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path={DEFAULT_URL} exact><Home /></Route>
        <Route path={FORM_URL}><Form /></Route>
        <Route path={STOPWATCH_URL}><Stopwatch /></Route>
        <Route path={CONTEXT_URL}><Context /></Route>
        <Route path={REDUCER_URL}><Todo /></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
