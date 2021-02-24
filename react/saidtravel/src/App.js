import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Testimonials from './components/pages/Testimonials';
import Articles from './components/pages/Articles';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Helmet />
        <Switch>
          <Route path='/' exact component={Home}  />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/about' component={About} />
          <Route path='/testimonials' component={Testimonials} />
          <Route path='/articles' component={Articles} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;
