import React from 'react'
import styled from 'styled-components'
import api from '../../api'

import Label from '../atoms/label'
import Button from '../atoms/button'
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
    padding: 100px 0;
`

const CenterWrapper = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
`

let today = new Date().getFullYear() + "-" + ("0" + (new Date().getMonth()+1)).slice(-2) + "-" + ("0" + new Date().getDate()).slice(-2)

class CreateSection extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        error: false,
        name: '',
        description: '',
        end_date: today,
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
        console.log(today)
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
                    if(this.validate()) {
                        this.props.editStatus()
                        this.setState({
                            name: '',
                            description: '',
                            end_date: today
                        })
                    }
                })
        }
    }

    validate = () => {
        var check = 0
        if(this.state.name.length <= 0 || this.state.name.length > 100) check--
        if(this.state.description.length <= 0) check--
        return check===0
    }

    createEnter = e => {
        if (e.keyCode === 13) {
            this.createNote()
        }
    }

    render() {        
        return (
            <HeaderWrapper id="create" bgColor="#F9FAFC">
                <CenterWrapper>
                    <Label titlename size="60px" weight="700" color="#4f485c">Create_Note</Label>
                    <CenterWrapper style={{justifyContent: 'center', flexDirection: 'row'}}>
                        <Label style={{width: '150px', display: 'flex', justifyContent: 'flex-end', marginRight: '24px'}}size="18px" weight="500" color="#4f485c">Name of Note</Label>
                        <TextField value={this.state.name} onKeyDown={this.createEnter} onChange={this.changeName} placeholder="name of note" width="400px" height="40px"/>
                    </CenterWrapper>
                    <CenterWrapper style={{justifyContent: 'center', flexDirection: 'row'}}>
                        <Label style={{width: '150px', display: 'flex', justifyContent: 'flex-end', marginRight: '24px'}} size="18px" weight="500" color="#4f485c">Description</Label>
                        <TextField value={this.state.description} onKeyDown={this.createEnter} onChange={this.changeDescription} placeholder="description" width="400px" height="40px"/>
                    </CenterWrapper>
                    <CenterWrapper style={{justifyContent: 'center', flexDirection: 'row'}}>
                        <Label style={{width: '150px', display: 'flex', justifyContent: 'flex-end', marginRight: '24px'}} size="18px" weight="500" color="#4f485c">Deadline</Label>
                        <TextField value={this.state.end_date} onKeyDown={this.createEnter} type="Date" onChange={this.changeDate} placeholder="end date" width="400px" height="40px"/>
                    </CenterWrapper>
                    <Button onClick={this.createNote} height="50px" width="200px" size="24px" color="#4f485c">Create</Button>
                    {this.state.error && <Label style={{textAlign: 'center', marginTop: '16px'}} size="18px" weight="300" color="#880000">
                        'Plase set value of Name of Note and Description (Name of Note is limited to 100 characters).'
                    </Label>}
                </CenterWrapper>
            </HeaderWrapper>
        )
    }
}

export default CreateSection;