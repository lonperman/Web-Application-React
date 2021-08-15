import './App.css';
import { Link,Route } from 'wouter';

import Home from './pages/Home/index';
import SearchResults from './pages/SearchResults/index';
import Detail from './pages/Detail/index';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

function App() {

  return (
   <StaticContext.Provider value={{name: 'lonperman', suscribete: true}}>
        <div className="App">
          <section className="App-content">
              <Link to="/">
                <img className="App-logo" alt="Giffy logo" src="/logo-old.png"/>
              </Link>
              <GifsContextProvider>
                <Route
                  component={Home}
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
              </GifsContextProvider>
          </section>
      </div>
   </StaticContext.Provider>
  );
}

export default App;
