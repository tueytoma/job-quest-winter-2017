import React from 'react'
import styled from 'styled-components'
import utils from '../../utils'

import Label from '../atoms/label'

const Wrapper = styled.div``

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
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-self: center;
`


class DescriptionSection extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
      };
    }

    render() {        
        return (
            <Wrapper>
                {utils.isMobile() ? 
                <HeaderWrapper bgColor="#4f485c" height="auto" style={{padding: '8px 0 8px 0'}}>
                    <CenterWrapper style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Label style={{textAlign: 'center'}} size="16px" weight="500" color="white"> 
                        New way to make notes - One of the most effective ways to remember
                        </Label>
                    </CenterWrapper>
                </HeaderWrapper>
                :
                <HeaderWrapper bgColor="#4f485c" height="15vh">
                    <CenterWrapper style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Label style={{textAlign: 'center'}} size="24px" weight="500" color="white"> 
                        New way to make notes - One of the most effective ways to remember
                        </Label>
                    </CenterWrapper>
                </HeaderWrapper>
                }
            </Wrapper>
        )
    }
}

export default DescriptionSection;