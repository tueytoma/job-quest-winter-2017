import React from 'react'
import styled, { css } from 'styled-components'

import Label from '../atoms/label'

const Wrapper = styled.div`
    background: #7289da;
    width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: flex-end;
    z-index: 100;

    padding-right: 48px;
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
                <Label size="20px" weight="100" color="white" topbar>Tools</Label>
                <Label size="20px" weight="100" color="white" topbar>To-do lists</Label>
                <Label size="20px" weight="100" color="white" topbar>About</Label>
                <Label size="20px" weight="100" color="white" topbar dark>Create Note</Label>
            </Wrapper>
        )
    }
}

export default Topbar