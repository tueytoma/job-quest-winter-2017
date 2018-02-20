import React from 'react'
import styled from 'styled-components'
import utils from '../../utils'

import Label from '../atoms/label'

const Wrapper = styled.div`
    align-self: center;
`

const TopbarWrapper = styled.div`
    /* background: #7289da; */
    width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 100;
    padding-right: 48px;
`

const A = styled.a`
    text-decoration: none;
    &:hover  {
        text-decoration: none;
    }
`

class Topbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }

    render() {
        return(
            <Wrapper>
                {utils.isMobile() ? 
                <TopbarWrapper>
                </TopbarWrapper>
                :
                <TopbarWrapper>
                    <A href="#tool"><Label size="20px" weight="300" color="white" topbar>Tools</Label></A>
                    <A href="#list"><Label size="20px" weight="300" color="white" topbar>To-do lists</Label></A>
                    <A href="#create"><Label size="20px" weight="300" color="white" topbar dark>Create Note</Label></A>
                </TopbarWrapper>
                }
            </Wrapper>
        )
    }
}

export default Topbar