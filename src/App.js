import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MoreDetails from './components/MoreDetails/MoreDetails';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';

export const RingContext=createContext('ring')
const discount="do you use coupon code(MR2021) you got 20% discount"
function App() {
  return (
    <RingContext.Provider value={discount}>
               {/* {declare router} */}
      <Router>
                  <Header/>
                    <Switch>
                               <Route exact path="/">
                                        <Home></Home>
                              </Route>
                               <Route exact path="/home">
                                        <Home></Home>
                              </Route>
                               <Route exact path="/about">
                                        <About></About>
                              </Route>
                               <Route exact path="/services">
                                        <Services></Services>
                              </Route>
                               <Route exact path="/services/:id">
                                        <MoreDetails></MoreDetails>
                              </Route>
                               <Route exact path="/contact">
                                        <Contact></Contact>
                              </Route>
                               <Route exact path="*">
                                        <NotFound></NotFound>
                              </Route>
                 </Switch>
                    <Footer></Footer>
          </Router>
    </RingContext.Provider>
  );
}

export default App;
