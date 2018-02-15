import React from 'react'
import styled from 'styled-components'
import api from '../../api'

import Label from '../atoms/label'
import Notebox from '../molecules/notebox'

import HeaderSection from '../organisms/header.section'
import DescriptionSection from '../organisms/description.section'
import ToolSection from '../organisms/tool.section'
import CreateSection from '../organisms/create.section'
import ListSection from '../organisms/list.section'
import FooterSection from '../organisms/footer.section'

const Wrapper = styled.div`
  background-color: #F5f5f5;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-self: center;
`

class homePage extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
            results: '',    
            search_name: '',
            search_type: ''
      };
    }

    componentDidMount() {
        this.getSearchResult()
    }

    getSearchResult = () => {
        api.getTodo()
            .then((res)=>{
                this.setState({results : res})
            })
    }

    search = e => {
        let data = this.state.search_type === 'All' ? '' :  this.state.search_type

        api.getTodoBy (this.state.search_name, data)
            .then((res)=>{
                this.setState({results : res})
            })
            
    }

    changSearchName = e => {
        this.setState({search_name : e.target.value})        
    } 

    changSearchType = e => {
        let data = e.target.value === 'All' ? '' :  e.target.value
        this.setState({search_type : e.target.value})

        api.getTodoBy (this.state.search_name, data)
        .then((res)=>{
            this.setState({results : res})
        })
    } 

    render() {
        var resultFeed = []
        for (var i = 0 ; i < this.state.results.length ; i++)
          resultFeed.push(<Notebox editStatus={this.search} key={i} note={this.state.results[i]}/>)
        
        if(this.state.results.length === 0) 
        resultFeed.push(<Label style={{textAlign: 'center'}} key={0} size="24px" weight="300" color="#c4c4c4">No Items</Label>)
        
        return (
            <Wrapper>
                <HeaderSection/>
                <DescriptionSection/>
                <ToolSection/>
                <CreateSection editStatus={this.search}/>
                <ListSection resultFeed={resultFeed} searchFunc={this.search} changeName={this.changSearchName} changeType={this.changSearchType}/>
                <FooterSection/>
            </Wrapper>
        )
    }
    
}

export default homePage