import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { Route, Switch } from 'react-router-dom'
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path='/searchpage' component={SearchPage} />
        <Route path='/' component={Home} />
      </Switch>
      <Footer />

      {/* Header */}
      {/* Banner */}
      {/* Cart */}
      {/* Footer */}
    </div>
  );
}

export default App;
