import React from 'react';



import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Adformat from './Components/AdFormats/Adformat'
import PopUnder from './Components/AdFormats/Section/PopUnder'
import Banner from './Components/AdFormats/Section/Banner'
import Native from './Components/AdFormats/Section/Native'
import Skim from './Components/AdFormats/Section/Skim'
const App = () => {
  return (
   
      <div>
      
      <Router>
      <Adformat/>
     
      <Routes>
          <Route path="/Pop">
            <PopUnder/>
          </Route>
          <Route path="/ad">
            <Banner/>
          </Route>
          <Route path="/native">
            <Native/>
          </Route>
          <Route path="/skim">
            <Skim/>
          </Route>
         
          <Route exact path="/">
          <PopUnder />
          </Route>

        </Routes>
       
    </Router>
    
      
    </div>
  );
};

export default App;
