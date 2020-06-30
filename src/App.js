import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
//import axios from 'axios'
import Main from './Main'
import History from './History'
//import About from './About'

class App extends Component {

state={
  amount : 10,
  from:'EUR',
  tof: 'USD',
  isLoaded:false,
  item:{},
  histories:[
    {id:1, amount:10, from:"EUR", to:"USD"},
    {id:2, amount:20, from:"USD", to:"CAD"}
  ]
}

componentDidMount() {
  fetch(`http://api.currencylayer.com/convert
  ? access_key = 3c4c32d5507977e1facd40bf20fa702f
  & from = USD
  & to = EUR
  & amount = 25
  & format = 1
  & date = YYYY-MM-DD`)
    .then(res =>res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          item: result.items
        });
      }
    )
}

handleFrom = (e) =>{
  this.setState({
    from: e.target.value
  });
}

handleAmount = (e) =>{
  this.setState({
    amount: e.target.value
  });
}

handleTo = (e) =>{
  this.setState({
    tof: e.target.value
  })
}

handleSubmit = (e) =>{
  e.preventDefault()
  let histories = [...this.state.histories, this.state.item]
  this.setState({
    histories : histories
  })
}
 render(){
  return (
    <BrowserRouter>
        <React.Fragment>
          <div className="container">
            <Route exact path="/" render={(props) => <Main {...props} state={this.state}  from={this.handleFrom} to={this.handleTo} submit={this.handleSubmit} amount={this.handleAmount}/> } />
            <Route path="/history" render={(props) => <History {...props} todos={this.state.histories} /> } />
          </div>
        </React.Fragment>
    </BrowserRouter>
  );
}
}

export default App;
