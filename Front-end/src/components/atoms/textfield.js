import React from 'react'
import styled from 'styled-components'

const InputTextStyled = styled.input`
    outline: none;
    font-family: Kanit;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 18px;
    color: #202020;
    width: ${props => props.width};
    height: ${props => props.height};
    border: 1px solid #C4C3C3;
    border-radius: 6px;
    padding: 2px 16px 4px 16px;
    margin: 16px 0 16px 0;
    transition: all 0.2s ease;

    &::placeholder {
        color: rgba(84, 84, 84, 0.2);
    }

    &:focus {
        border: 2px solid #4f485c;
        box-shadow: 0px 0px 4px #4f485c;
    }
`

class Textfield extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        };
    }

    render(){
        return (
            <InputTextStyled onKeyDown={this.props.onKeyDown} type={this.props.type} onChange={this.props.onChange} width={this.props.width} height={this.props.height} 
            placeholder={this.props.placeholder} value={this.props.value}/>
        )
    }
}

export default Textfield;