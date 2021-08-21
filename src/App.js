import React, { Suspense } from 'react'
import './App.css';
import { Link, Route } from 'wouter';

import SearchResults from './pages/SearchResults/index';
import Detail from './pages/Detail/index';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

const HomePage = React.lazy(() => import('./pages/Home/index'))

function App() {

  return (
    <StaticContext.Provider value={{ name: 'lonperman', suscribete: true }}>
      <Suspense fallback={null}>
        <div className="App">
          <section className="App-content">
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
                path="/search/:keyword"
              />
              <Route
                component={Detail}
                path="/gif/:id"
              />
              <Route
                component={() => <h1>404 ERROR :(</h1>}
                path="/404"
              />
            </GifsContextProvider>
          </section>
        </div>
      </Suspense>
    </StaticContext.Provider>
  );
}

export default App;
