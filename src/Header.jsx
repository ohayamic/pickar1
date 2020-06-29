import React, { Component } from 'react'
import styled from 'styled-components'


class Header extends Component {
    render() {

        const JumboDiv = styled.div`
         height: 380px;
         background: #333333;
         color:white;
         font-weight: 1000;
         padding:20px 60px;
        `;

        const BodyDiv = styled.div`
          margin-top: 100px;
        `;
        return (
            <React.Fragment>
                <JumboDiv className="jumbotron">
                    <h1 className="display-5">pickar</h1>
                    <BodyDiv><h1>Convert currencies in real-time.</h1></BodyDiv>
                </JumboDiv>
            </React.Fragment>
        )
    }
}
export default Header;