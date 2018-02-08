import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom';
import api from '../../api'

import Label from '../label'

const Wrapper = styled.div`
  background-color: #FF0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  
  align-self: center;
`

class homePage extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
          text: '555'
      };
    }

    componentDidMount(){
        api.getTodo()
        .then((res)=>{
          this.setState({text : res})
          console.log(res)
        })
    }

    render() {
        return (
            <Wrapper>
                <Label>{this.state.text}</Label>
            </Wrapper>
        )
    }
}

export default homePage