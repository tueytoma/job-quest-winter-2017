import React from 'react'
import styled from 'styled-components'

import Label from '../atoms/label'
import Typed from '../molecules/typed'
import Topbar from '../organisms/topbar'

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

const CenterWraper = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-self: center;
`


class HeaderSection extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
      };
    }

    render() {        
        return (
            <HeaderWrapper bgColor="#80788E" height="95vh">
                <CenterWraper>
                <Topbar/>
                    <Typed/>
                    <Label size="24px" weight="500" color="white">do <b>Check-list</b> that you can manage yourself</Label>
                </CenterWraper>
            </HeaderWrapper>
        )
    }
}

export default HeaderSection;