import React, { useEffect } from 'react';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import { Main, ProjectPage } from './pages';
import { BackToTop } from './components';
import ScrollToTop from './utils/ScrollToTop';
import './App.css';
import URLS from './routing';

function App() {
  useEffect(() => {
    const handleObserver = () => {
      const observerCallback = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08
      });

      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    };

    // Run on mount and periodically after load
    handleObserver();
    const timer = setTimeout(handleObserver, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <HashRouter>
        <ScrollToTop />
        <Switch>
          <Route path={URLS.Home} exact component={Main} />
          <Route path="/projects" exact component={ProjectPage} />
          <Redirect to={URLS.Home} />
        </Switch>
      </HashRouter>
      <BackToTop />
    </div>
  );
}

export default App;
