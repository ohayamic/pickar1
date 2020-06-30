import React from 'react'
import styled from 'styled-components'
const DisplayHistory = ({histories}) => {

const Wrapper = styled.div`
    height:60px;
    width:100%;
    background: #ffffff;
    padding: 20px 50px;
    border: 1px solid #e6e6e6;
    border-radius: 15px;
    margin-bottom:15px;

`;
        
const Para = styled.p`
        margin-left: ${props => props.primary ? "40px" : "10px"};
        color:black;
        font-size:16px;
        font-weight:bold;
        `;
        const DisplayTodos = histories.length? 
        (histories.map(history =>{
            return(
            <Wrapper  key={history.id}>
                <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Para>{history.id}</Para>
                    </div>
                    <div className="col-sm">
                        <Para>{history.amount}{history.from}</Para>
                    </div>
                    <div className="col-sm">
                        <Para primary>{history.amount + Math.random(history.amount)}{history.to}</Para>
                    </div>
                </div>
            </div>
            </Wrapper>
                )
        })) : 
        
        (<div> Error</div>)
    return (
        <div>
             {DisplayTodos}
        </div>
    )
}

export default DisplayHistory
