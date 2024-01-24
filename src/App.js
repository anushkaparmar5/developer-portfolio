import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import { ThemeContext } from './contexts/ThemeContext';
import { Main } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'
import URLS from './routing';

function App() {

  const { theme } = useContext(ThemeContext);

  console.log("%cBANSI PARMAR PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  console.log("%chttps://github.com/anushkaparmar5", `color:${theme.tertiary}; font-size:20px`);

  return (
    <div className="app">
      {/* <Router basename="/developer-portfolio"> */}
      <HashRouter basename='/developer-portfolio'>
        <ScrollToTop />
        <Switch>
          <Route path={URLS.Home} exact component={Main} />
          {/* <Route path="/projects" exact component={ProjectPage} /> */}
          <Redirect path={URLS.Home} />
        </Switch>
        {/* </Router> */}
      </HashRouter>
      <BackToTop />
    </div>
  );
}

export default App;
