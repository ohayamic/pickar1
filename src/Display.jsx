import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Right from './right.png'


const Display = () => {

    const JumboDiv = styled.div`
        margin-top: -30px;
        margin-bottom: 0px;
         height: 800px;
         background: #d6f5f5;
         color:white;
         padding-left: 140px;
         
         
        `;
    const ConvertHis = styled.p`
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
      margin: 100px 0px 10px 0px;
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
                    <ConvertHis> <Link to ="/history">view conversion history <span><Image src={Right} alt="right" /></span> </Link></ConvertHis>
                    <P> 1 EUR = </P>
                    <ConvertedToDiv > 1.12392 USD</ConvertedToDiv>
                </JumboDiv>
            </React.Fragment>
        )
}

export default Display
