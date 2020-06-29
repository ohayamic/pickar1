import React, { Component } from 'react'
import styled from 'styled-components'
import Exchange from './exchange.png'

class Converter extends Component {
    render() {

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
        return (
            <React.Fragment>
                <Wrapper class="container">

                <form>
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="inputEmail4">Amount</label>
                            <input type="text" class="form-control" value="Enter Amount"/>
                        </div>
                        <div class="form-group col-md-3">
                            <label >From</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>USD</option>
                                <option>EUR</option>
                                <option>GBP</option>
                                <option>CAN</option>
                            </select>
                        </div>
                        <div class="form-group col-md-1">
                            
                        <span><Image src={Exchange} alt="exchange" /></span>
                        </div>
                        <div class="form-group col-md-3">
                            <label >To</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>USD</option>
                                <option>EUR</option>
                                <option>GBP</option>
                                <option>CAN</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2"> 
                            <Button type="submit" >Convert</Button>
                        </div>
                    </div>  
                </form>
                </Wrapper>   
        
            </React.Fragment>
        )
    }
}
export default Converter;