import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import ProjectPage from './components/ProjectPage';
import * as serviceWorker from './serviceWorker';
import WebFontLoader from 'webfontloader';
import NoMatchPage from './components/NoMatchPage';

WebFontLoader.load({
  google: {
    families: [
      'Roboto Slab:300,400:latin-ext'
    ]
  }
})

const routing = (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/project/:id" component={ProjectPage} />
      <Route component={NoMatchPage} />
    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
