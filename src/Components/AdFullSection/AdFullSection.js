import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";
  import Adformat from '../AdFormats/Adformat.js'
  import PopUnder from '../AdFormats/Section/PopUnder'
  import Banner from '../AdFormats/Section/Banner'
  import Native from '../AdFormats/Section/Native'
  import Skim from '../AdFormats/Section/Skim'
const AdFullSection = () => {
    return (
        <div>
              <Router>
      <Adformat/> 
     
      <Switch>
          <Route path="/pop">
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
          <PopUnder/>
          </Route>
         
          

        </Switch>
       
    </Router>
    
      
            
        </div>
    );
};

export default AdFullSection;