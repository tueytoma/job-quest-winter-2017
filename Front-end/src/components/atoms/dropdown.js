import React from 'react'

import styled, { css } from 'styled-components'

const Wrapper = styled.div`
`
const Select = styled.select`
    width: ${props => props.width};
    height: ${props => props.height};
    font-family: Kanit;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 16px;
    color: #202020;
    border: 1px solid #C4C3C3;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 2px 16px 4px 16px;
    margin: 15px 0 0 16px;
    outline: none;
    transition: all 0.2s ease;

     &:focus {
        border: 2px solid #4f485c;
        box-shadow: 0px 0px 4px #4f485c;
    }
`

const Option = styled.option`
    color: #545454;
`


class DropdownMenu extends React.Component {
    constructor(props) {
    super(props)
  }

    render() {
        return(
            <Wrapper >
                <Select style={this.props.style} value={this.props.value} onChange={this.props.onChange} color={this.props.color} width={this.props.width} height= {this.props.height}>
                    <Option value="all">All.</Option>
                    {this.props.menu.map(item => (
                        <Option key={item} value={item}>{item}</Option>
                    ))}
                </Select>
            </Wrapper>
        )
    }
}

export default DropdownMenu