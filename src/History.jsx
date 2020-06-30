import React from 'react'
import Hisheader from './Hisheader'
import DisplayHistory from './DisplayHistory'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Left from './images/left.png'


const History =({todos} ) => {
    

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
                        <Hisheader />
                        <DisplayHistory histories={todos}/>
                    </BodyDiv>
                    
                </JumboDiv>
            </React.Fragment>
        )
    
}
export default History;