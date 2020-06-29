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
                <Converter />
                <Display />
                
            </React.Fragment>
        )
    }
}
export default Main;