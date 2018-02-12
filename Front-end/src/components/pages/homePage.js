import React from 'react'
import styled from 'styled-components'
import api from '../../api'

import Label from '../atoms/label'
import Button from '../atoms/button'
import Typed from '../molecules/typed'
import Notebox from '../molecules/notebox'
import Topbar from '../organisms/topbar'
import TextField from '../atoms/textfield'
import Dropdown from '../atoms/dropdown'

const Wrapper = styled.div`
  background-color: #F5f5f5;
  width: 100vw;
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
    background-image: url(${props => props.bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: ${props => props.height};
    display: flex;
    flex-direction: column;
`

const Div = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`

class homePage extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
            results: '',     
            error: false,
            name: '',
            description: '',
            end_date: '',
            search_name: '',
            search_type: '',
      };
    }

    changeName = e => {
        this.setState({name : e.target.value})
    }

    changeDescription= e => {
        this.setState({description : e.target.value})
    }

    changeDate = e => {
        this.setState({end_date : e.target.value})
    }

    changSearchName = e => {
        this.setState({search_name : e.target.value})
    } 

    changSearchType = e => {
        this.setState({search_type : e.target.value})
    } 

    createNote = e => {
        let data = {
            name: this.state.name,
            description: this.state.description,
            end_date: this.state.end_date,
            status: "Todo"
        }
        this.setState({error : !this.validate()})
        if(this.validate()){
            api.createNote(data)
                .then((res)=>{
                    console.log(res)
                    if(this.validate()) {
                    //   console.log("SUCCESS")
                    window.location.reload(true);
                    }
                })
        }

    }

    validate = () => {
        var check = 0
        if(this.state.name.length <= 0 || this.state.name.length > 200) check--
        if(this.state.description.length <= 0 || this.state.name.length > 200) check--
        return check===0
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
        if (e.keyCode === 13) {
            console.log()
        }
    }

    render() {
        var resultFeed = []
        for (var i = 0 ; i < this.state.results.length ; i++)
          resultFeed.push(<Notebox key={i} note={this.state.results[i]}/>)
        
        return (
            <Wrapper>
                <HeaderWrapper bgColor="#80788E" height="95vh">
                    <CenterWraper>
                    <Topbar/>
                        <Typed/>
                        <Label size="24px" weight="500" color="white">do <b>Check-list</b> that you can manage yourself</Label>
                    </CenterWraper>
                </HeaderWrapper>

                <HeaderWrapper bgColor="#4f485c" height="15vh">
                    <CenterWraper style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Label style={{textAlign: 'center'}} size="24px" weight="500" color="white"> 
                        New way to make notes - One of the most effective ways to remember
                        </Label>
                    </CenterWraper>
                </HeaderWrapper>

                <HeaderWrapper id="tool" bgColor="#F5f5f5" style={{padding: "100px 0"}}>
                    <CenterWraper style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Div>
                            <Label size="24px" weight="900" color="#545454">CREATE</Label>
                            <Label style={{textAlign: 'center'}}
                            size="18px" weight="100" color="#c4c4c4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula justo, dictum faucibus ligula sit amet, tincidunt auctor ante. Ut feugiat lacus at risus lacinia imperdiet. Sed ultricies est eget.
                            </Label>
                        </Div>
                        <Div>
                            <Label size="24px" weight="900" color="#545454">CHECK</Label>
                            <Label style={{textAlign: 'center'}}
                            size="18px" weight="100" color="#c4c4c4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula justo, dictum faucibus ligula sit amet, tincidunt auctor ante. Ut feugiat lacus at risus lacinia imperdiet. Sed ultricies est eget.
                            </Label>
                        </Div>
                        <Div>
                            <Label size="24px" weight="900" color="#545454">DELETE</Label>
                            <Label style={{textAlign: 'center'}}
                            size="18px" weight="100" color="#c4c4c4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula justo, dictum faucibus ligula sit amet, tincidunt auctor ante. Ut feugiat lacus at risus lacinia imperdiet. Sed ultricies est eget.
                            </Label>
                        </Div>
                    </CenterWraper>
                </HeaderWrapper>

                <HeaderWrapper id="create" bgColor="#F9FAFC" style={{padding: "100px 0"}}>
                    <CenterWraper style={{alignItems: 'center'}}>
                        <Label size="60px" weight="900" color="#4f485c">Create_Note</Label>
                        <CenterWraper style={{justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
                            <Label style={{width: '150px', display: 'flex', justifyContent: 'flex-end', marginRight: '24px'}}size="18px" weight="900" color="#4f485c">Name of Note</Label>
                            <TextField onChange={this.changeName} placeholder="name of note" width="400px" height="30px"/>
                        </CenterWraper>
                        <CenterWraper style={{justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
                            <Label style={{width: '150px', display: 'flex', justifyContent: 'flex-end', marginRight: '24px'}} size="18px" weight="900" color="#4f485c">Description</Label>
                            <TextField onChange={this.changeDescription} placeholder="description" width="400px" height="30px"/>
                        </CenterWraper>
                        <CenterWraper style={{justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
                            <Label style={{width: '150px', display: 'flex', justifyContent: 'flex-end', marginRight: '24px'}} size="18px" weight="900" color="#4f485c">Deadline</Label>
                            <TextField type="Date" onChange={this.changeDate} placeholder="end date" width="400px" height="30px"/>
                        </CenterWraper>
                        <Button onClick={this.createNote} height="50px" width="200px" size="24px" color="#4f485c">Create</Button>
                        {this.state.error && <Label style={{textAlign: 'center', marginTop: '16px'}} size="18px" weight="100" color="#880000">
                            'Name of Note' and 'Description' are limited to 200 characters.
                        </Label>}
                    </CenterWraper>
                </HeaderWrapper>

                <HeaderWrapper id="list" bgColor="#F5f5f5" style={{padding: "100px 0"}}>
                    <CenterWraper style={{alignItems: 'center'}}>
                        <Label title size="60px" weight="900" color="#4f485c">To-do_Lists</Label>
                        <CenterWraper style={{justifyContent: 'center', flexDirection: 'row'}}>
                            <TextField onKeyDown={this.search} onChange={this.changSearchName} placeholder="search" width="400px" height="30px"/>
                            <Dropdown onChange={this.changSearchType} width="auto" height="40px" menu={['Todo','Done']}/>
                        </CenterWraper>
                        {resultFeed}
                    </CenterWraper>
                </HeaderWrapper>

                

            </Wrapper>
        )
    }
}

export default homePage