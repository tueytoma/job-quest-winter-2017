import React from 'react'
import styled from 'styled-components'
import utils from '../../utils'

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

const CenterWrapper = styled.div`
    width: ${props => props.width};
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
        let titleSize = utils.isMobile() ? "12vw" : "60px"
        let pad = utils.isMobile() ? "50px 0" : "100px 0" 
        let direction = utils.isMobile() ? "column" : "row"
        let wTextfield = utils.isMobile() ? "80vw" : "400px"
        let mLeft = utils.isMobile() ? "0" : "16px"
        let mBottom = utils.isMobile() ? "16px" : "0"
        let wDropdown = utils.isMobile() ? "80vw" : "auto"
        let w = utils.isMobile() ? "99%" : "80%"
        return (
        <HeaderWrapper id="list" bgColor="#F5f5f5" style={{padding: pad}}>
            <CenterWrapper width={w} style={{alignItems: 'center'}}>
                <Label titlename size={titleSize} weight="700" color="#4f485c">To-do_Lists</Label>
                <CenterWrapper style={{justifyContent: 'center', flexDirection: direction, alignItems: 'center'}}>
                    <TextField onKeyDown={this.searchEnter} onChange={this.props.changeName} placeholder="search" width={wTextfield} height="40px"/>
                    <Dropdown style={{marginLeft: mLeft, marginBottom: mBottom}} onChange={this.props.changeType} width={wDropdown} height="40px" menu={['Todo','Done']}/>
                    <Label topbar onClick={this.props.searchFunc} size="16px" weight="400" color="#4f485c">search</Label>
                </CenterWrapper>
                {this.props.resultFeed}
            </CenterWrapper>
        </HeaderWrapper>

        )
    }
}

export default ListSection;