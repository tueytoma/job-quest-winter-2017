import React from 'react'
import styled from 'styled-components'
import utils from '../../utils'

import Label from '../atoms/label'
import CreaetIcon from '../atoms/createicon'
import CheckIcon from '../atoms/checkicon'
import DeleteIcon from '../atoms/deleteicon'

const HeaderWrapper = styled.div`
    background-color: ${props => props.bgColor};
    background-image: url(${props => props.bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: ${props => props.height};
    display: flex;
    flex-direction: column;
`

const CenterWrapper = styled.div`
    width: ${props => props.width};
    height: 100%;
    display: flex;
    flex-direction: column;
    align-self: center;
`
const Div = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${props => props.mar};
`

class ToolSection extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
      };
    }

    render() {        
        let direction = utils.isMobile() ? "column" : "row"
        let mar = utils.isMobile() ? "16px" : "0"
        let size = utils.isMobile() ? "40%" : "30%"
        let pad = utils.isMobile() ? "50px 0" : "100px 0"
        let w = utils.isMobile() ? "99%" : "80%"
        return (
            <HeaderWrapper id="tool" bgColor="#F5f5f5" style={{padding: pad}}>
                <CenterWrapper width={w} style={{flexDirection: direction, justifyContent: 'center'}}>
                    <Div mar = {mar}>
                        <CreaetIcon width={size}/>
                        <Label size="24px" weight="800" color="#4f485c">CREATE</Label>
                        <Label style={{textAlign: 'center'}}
                        size="18px" weight="300" color="#c4c4c4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula justo, dictum faucibus ligula sit amet, tincidunt auctor ante. Ut feugiat lacus at risus lacinia imperdiet. Sed ultricies est eget.
                        </Label>
                    </Div>
                    <Div mar = {mar}>
                        <CheckIcon width={size}/>
                        <Label size="24px" weight="800" color="#4f485c">CHECK</Label>
                        <Label style={{textAlign: 'center'}}
                        size="18px" weight="300" color="#c4c4c4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula justo, dictum faucibus ligula sit amet, tincidunt auctor ante. Ut feugiat lacus at risus lacinia imperdiet. Sed ultricies est eget.
                        </Label>
                    </Div>
                    <Div mar = {mar}>
                        <DeleteIcon width={size}/>
                        <Label size="24px" weight="800" color="#4f485c">DELETE</Label>
                        <Label style={{textAlign: 'center'}}
                        size="18px" weight="300" color="#c4c4c4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula justo, dictum faucibus ligula sit amet, tincidunt auctor ante. Ut feugiat lacus at risus lacinia imperdiet. Sed ultricies est eget.
                        </Label>
                    </Div>
                </CenterWrapper>
            </HeaderWrapper>
        )
    }
}

export default ToolSection;