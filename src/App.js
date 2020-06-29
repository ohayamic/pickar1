import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
//import styled from 'styled-components'
import Main from './Main'
import History from './History'


const App = () => {
 
  return (
    <BrowserRouter>
        <React.Fragment>
          <div class="container">
            <Route exact path="/" component ={Main} />
            <Route path="/history" component={History} />
          </div>
        </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
