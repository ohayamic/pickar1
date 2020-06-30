import React, { Component } from 'react'
import Header from './Header'
import Display from './Display'
import Converter from './converter'
//import styled from 'styled-components'


class Main extends Component {


    render() {
        
        return (
            <React.Fragment>
                <Header />
                <Converter amount= {this.props.amount} from={this.props.from} tof={this.props.to} submit={this.props.submit}/>
                <Display state={this.props.state}/>
                
            </React.Fragment>
        )
    }
}
export default Main;