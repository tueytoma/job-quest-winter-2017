import React from 'react'
import styled from 'styled-components'

import Label from '../atoms/label'

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

class FooterSection extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
      };
    }

    render() {        
        return (
            <HeaderWrapper bgColor="#4f485c" height="60px">
                <CenterWrapper style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Label style={{textAlign: 'center'}} size="16px" weight="500" color="#80788E"> 
                        Design & Develope by: Sitthichai Tuey Saejia
                    </Label>
                </CenterWrapper>
            </HeaderWrapper>
        )
    }
}

export default FooterSection;