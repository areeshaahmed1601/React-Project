import React from 'react';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages';
import Footer from './components/Footer'
import Services from './components/Services'
import Navbar from './components/Navbar';




function App() {
  return (
    <Router >
      <Navbar/>
      <Switch>
    <Route exact path='/'>
       <Home/>
     </Route>
     <Route path='/footer'>
       <Footer/>
     </Route>
     <Route path='/books'>
       <Services/>
     </Route>
      </Switch>
    </Router>
  );
}

export default App;
