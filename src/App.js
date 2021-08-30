import React, { Suspense } from 'react'
import { Link, Route, Switch } from 'wouter';

/**Pages */
import Login from 'pages/Login'
import SearchResults from 'pages/SearchResults/index';
import Detail from 'pages/Detail/index';
import ErrorPage from 'pages/ErrorPage';
/**Components */
import Header from 'components/Header';
import Register from 'components/Register/indexFormik';
/**Context */
import { UserContextProvider } from 'context/UserContext';
import { GifsContextProvider } from './context/GifsContext';

import './App.css';

const HomePage = React.lazy(() => import('pages/Home/index'))

function App() {

  return (
    <UserContextProvider>
    <div className="App">
      <Suspense fallback={null}>
        <section className="App-content">
          <Header />
          <Link to="/">
            <figure className="App-logo">
              <img alt="Giffy logo" src="/logo.png" />
            </figure>
          </Link>
          <GifsContextProvider>
            <Switch>
              <Route component={HomePage} path="/" />
              <Route
                component={SearchResults}
                path="/search/:keyword/:rating?"
              />
              <Route component={Detail} path="/gif/:id" />
              <Route component={Login} path="/login" />
              <Route component={Register} path="/register" />
              <Route component={ErrorPage} path="/:rest*" />
            </Switch>
          </GifsContextProvider>
        </section>
      </Suspense>
    </div>
  </UserContextProvider>
  );
}

export default App;
