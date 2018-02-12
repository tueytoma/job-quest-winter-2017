import React from 'react'
import styled from 'styled-components'

import Label from '../atoms/label'

const Wrapper = styled.div`
    /* background: #7289da; */
    width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: flex-end;
    z-index: 100;
    padding-right: 48px;
`

const A = styled.a`
    text-decoration: none;
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
                <A href="#tool"><Label size="20px" weight="100" color="white" topbar>Tools</Label></A>
                <A href="#list"><Label size="20px" weight="100" color="white" topbar>To-do lists</Label></A>
                <A href="#create"><Label size="20px" weight="100" color="white" topbar dark>Create Note</Label></A>
            </Wrapper>
        )
    }
}

export default Topbar