import React, { Component } from 'react'
import styled from 'styled-components'
import Exchange from './images/exchange.png'

const Wrapper = styled.div`
position: absolute;
height:120px;
width:800px;
font-size:12px;
background: #ffffff;
margin-left:60px; 
margin-top:-80px;
padding: 20px;
border: 2px solid #e6e6e6;
border-radius: 15px;

`;

const Image = styled.img`
height:20px;
margin:35px 10px;
`;

const Button = styled.button`
width:120px;
height:45px;
font-size:16px;
border: 2px solid #e6e6e6;
border-radius: 10px;
margin:22px 10px; 
background:#fa3838;
color: white;
`;
class Converter extends Component {
    render() {


        return (
            <React.Fragment>
                <Wrapper >
                <div className="container">
                    
                
                <form > 
                    <div className="form-row">
                        <div className="form-group col-sm-3">
                            <label >Amount</label>
                            <input type="text" className="form-control"  onChange={this.props.amount}  placeholder="Enter Amount"/>
                        </div>
                        <div className="form-group col-sm-3">
                            <label >From</label>
                            <select className="form-control" id="exampleFormControlSelect1" onChange={this.props.from}>
                                <option value="">Choose Currency</option>
                                <option value="USD">USD</option>
                                <option value="EUR" >EUR</option>
                                <option value="GBP">GBP</option>
                                <option value="CAD">CAD</option>
                            </select>
                        </div>
                        <div className="form-group col-sm-1">
                            
                        <span><Image src={Exchange} alt="exchange" /></span>
                        </div>
                        <div className="form-group col-sm-3">
                            <label >To</label>
                            <select className="form-control" id="exampleFormControlSelect2" onChange={this.props.tof}>
                                <option value="">Choose Currency</option>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                                <option value="CAD">CAD</option>
                            </select>
                        </div>
                        <div className="form-group col-sm-2"> 
                            <Button >Convert</Button>
                        </div>
                    </div>  
                </form>
                </div>
                </Wrapper>   
        
            </React.Fragment>
        )
    }
}
export default Converter;