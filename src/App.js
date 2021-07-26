import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import BobaPage from './Components/BobaPage';
import BobaAnalytics from './Components/BobaAnalytics';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Style/App.css'

const joshoriris = true;

const anon = (
  <div class="overlay">
    <Main />
  </div>
)

const joshiris = (
  <div class="overlay">
    <Switch>
      <Route exact path='/' component={BobaAnalytics} />
      <Route path='/boba' component={BobaPage} />
    </Switch>
  </div>
)

function App() {
  return (
    <>
      <Router>
        <Header />
        { joshoriris ? joshiris : anon }
        <Footer />
      </Router>
    </>
  )
}



export default App;
