import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Form, Home, Stopwatch, Context, Todo } from './containers'
import { DEFAULT_URL, FORM_URL, STOPWATCH_URL, CONTEXT_URL, REDUCER_URL } from './constants';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={DEFAULT_URL} exact><Home /></Route>
        <Route path={FORM_URL}><Form /></Route>
        <Route path={STOPWATCH_URL}><Stopwatch /></Route>
        <Route path={CONTEXT_URL}><Context /></Route>
        <Route path={REDUCER_URL}><Todo /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
