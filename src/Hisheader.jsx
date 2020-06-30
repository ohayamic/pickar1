import React from 'react'
import styled from 'styled-components'

const Hisheader = () =>{

const Para = styled.p`
        margin-left: ${props => props.primary ? "60px" : "25px"};
        margin-top:-20px;
        `;

    return (
        <div className="container">
        <div className="row">
            <div className="col-sm" >
                <Para primary>
                Date
                </Para>
            </div>
            <div className="col-sm">
                <Para>
                From
                </Para>
            </div>
            <div className="col-sm">
                <Para>
                To
                </Para>
            </div>
        </div>
    </div>
    )
}

export default Hisheader
