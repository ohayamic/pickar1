import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Right from './images/right.png'


const Display = ({state}) => {

    const JumboDiv = styled.div`
        margin-top: -30px;
        margin-bottom: 0px;
         height: 600px;
         background: #d6f5f5;
         color:white;
         padding-left: 140px;
         
         
        `;
    const ConvertHis = styled.p`
        text-decoration: none;
        text-align: right;
        font-size: 14px;
        margin-top: -40px;
        color: #4d4d4d;
        
    `;

    const Image = styled.img`
        height:10px;
    `;
    const P = styled.p`
      font-size: 22px;
      margin: 60px 0px 10px 0px;
      color: #4d4d4d;
    `;

    const ConvertedToDiv = styled.div`
      color: #4d4d4d;
      font-size: 40px;
      font-weight:bold;
    `;

        return (
            <React.Fragment>
                <JumboDiv className="jumbotron">
                     <Link to ="/history"><ConvertHis>view conversion history <span><Image src={Right} alt="right" /></span></ConvertHis> </Link>
                    <P> {state.amount} {state.from} = </P>
                    <ConvertedToDiv >{5 + Math.random(state.amount)} {state.tof}</ConvertedToDiv>
                </JumboDiv>
            </React.Fragment>
        )
}

export default Display
