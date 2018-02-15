import React from 'react'
import styled from 'styled-components'

import Label from '../atoms/label'
import Dropdown from '../atoms/dropdown'
import TextField from '../atoms/textfield'

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
    align-items: center;
`

class ListSection extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        search_name: '',
        search_type: '',
      };
    }



    searchEnter = e => {
        if (e.keyCode === 13) {
            this.props.searchFunc()
        }
    }

    render() {        
        return (
            <HeaderWrapper id="list" bgColor="#F5f5f5" style={{padding: "100px 0"}}>
                <CenterWraper style={{alignItems: 'center'}}>
                    <Label titlename size="60px" weight="700" color="#4f485c">To-do_Lists</Label>
                    <CenterWraper style={{justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
                        <TextField onKeyDown={this.searchEnter} onChange={this.props.changeName} placeholder="search" width="400px" height="40px"/>
                        <Dropdown style={{marginLeft: '16px'}} onChange={this.props.changeType} width="auto" height="40px" menu={['Todo','Done']}/>
                        <Label topbar onClick={this.props.searchFunc} size="16px" weight="400" color="#4f485c">search</Label>
                    </CenterWraper>
                    {this.props.resultFeed}
                </CenterWraper>
            </HeaderWrapper>
        )
    }
}

export default ListSection;