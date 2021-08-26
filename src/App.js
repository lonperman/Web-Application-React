import React, { Suspense } from 'react'
import './App.css';
import { Link, Route } from 'wouter';

import Header from 'components/Header';
import Login from 'pages/Login'
import SearchResults from 'pages/SearchResults/index';
import Detail from 'pages/Detail/index';

import { UserContextProvider } from 'context/UserContext';
import { GifsContextProvider } from './context/GifsContext';

const HomePage = React.lazy(() => import('pages/Home/index'))

function App() {

  return (
    <UserContextProvider>
      <Suspense fallback={null}>
        <div className="App">
          <section className="App-content">
            <Header />
            <Link to="/">
              <img className="App-logo" alt="Giffy logo" src="/logo.png" />
            </Link>
            <GifsContextProvider>
              <Route
                component={HomePage}
                path="/"
              />
              <Route
                component={SearchResults}
                path="/search/:keyword/:rating?"
              />
              <Route
                component={Detail}
                path="/gif/:id"
              />
              <Route
                component={Login}
                path="/login"
              />
              <Route
                component={() => <h1>404 ERROR :(</h1>}
                path="/404"
              />
            </GifsContextProvider>
          </section>
        </div>
      </Suspense>
    </UserContextProvider>
  );
}

export default App;
