import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom';
import api from '../../api'

import Label from '../atoms/label'
import Button from '../atoms/button'
import Typed from '../molecules/typed'
import Topbar from '../organisms/topbar'

const Wrapper = styled.div`
  background-color: #F5f5f5;
  width: 100vw;
  height: 1000vh;
  display: flex;
  flex-direction: column;
  align-self: center;
`

const CenterWraper = styled.div`
    /* background-color: ${props => props.bgColor}; */
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;

    align-self: center;
`

const HeaderWrapper = styled.div`
    background-color: ${props => props.bgColor};
    width: 100vw;
    height: ${props => props.height};
    display: flex;
    flex-direction: column;
`

class homePage extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
          text: '555'
      };
    }

    // componentDidMount(){
    //     api.getTodo()
    //     .then((res)=>{
    //       this.setState({text : res})
    //       console.log(res)
    //     })
    // }

    test = e => {
    }

    render() {
        return (
            <Wrapper>
                <HeaderWrapper bgColor="#7289da" height="95vh">
                    <CenterWraper>
                    <Topbar/>
                        <Typed/>
                        <Label size="24px" weight="500" color="white">do <b>Check-list</b> that you can manage yourself</Label>
                    </CenterWraper>
                </HeaderWrapper>

                <HeaderWrapper bgColor="#4f485c" height="15vh">
                    <CenterWraper style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Button dark onClick={this.test} height="40px" width="145px" size="เริ่มค้นหา" color="#4f485c">Create Note</Button>
                    </CenterWraper>
                </HeaderWrapper>

                <HeaderWrapper bgColor="#FFF" style={{padding: "32px 0"}}>
                    <CenterWraper style={{alignItems: 'center'}}>
                        <Label size="60px" weight="900" >Create_Note</Label>
                    </CenterWraper>
                </HeaderWrapper>

            </Wrapper>
        )
    }
}

export default homePage