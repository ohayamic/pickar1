import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Left from './images/left.png'


const History =( ) => {
    

        const JumboDiv = styled.div`
         height: 700px;
         background: #333333;
         color:white;
         padding:20px 60px;
        `;

        const BodyDiv = styled.div`
            margin-top: 50px;
            font-size:12px;
            color: #a6a6a6;
        `;

        const BackLink = styled.p`
            text-decoration: none;
            font-size: 12px;
            margin-top:50px;
            color: #a6a6a6;
        `;

        const Para = styled.p`
        margin-left: ${props => props.primary ? "50px" : "20px"};
        margin-top:-20px;
        `;

        const Image = styled.img`
        height:10px;
        margin-right:5px;
    `;

    
        return (
            <React.Fragment>
                <JumboDiv className="jumbotron">
                    <h1 className="display-5">pickar</h1>
                    <Link to="/"> <BackLink><span><Image src={Left} alt="Left" /></span>Go back </BackLink></Link>
                    <BodyDiv>
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
                    </BodyDiv>
                    
                </JumboDiv>
            </React.Fragment>
        )
    
}
export default History;