import React from 'react'
import styled from 'styled-components'
import api from '../../api'
import  _ from 'lodash'

import { Modal } from 'react-bootstrap';

import Label from '../atoms/label'

const Wrapper = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: flex-end;
    flex-direction: row;
    transition: all 0.3s ease;
    margin: 8px 0 8px 0;
    padding-bottom: 8px;
    padding-top: 8px;
    border-bottom: 2px solid rgba(200,200,200,0.5);

    &:hover {
        background: rgba(200,200,200,0.2);
    }
`

const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;

`

const Right = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Half = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

const Status = styled.div`
    background: ${props => props.status};
    height: 100px;
    width: 100px;
    border-radius: 100px;
    transition: all 0.2s ease;

    &:hover {
        cursor: pointer;
        background: ${props => props.status === "#FF0000" ? "rgba(240,0,0,0.8)" : "rgba(0,240,0,0.8)"};
    }
`


class Notebox extends React.Component {
    constructor(props) {
        super(props)

        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false
        };
    }

    handleHide = e => {
        this.setState({ show: false });
    }

    handleShow = e => {
        this.setState({ show: true });
    }

    toggle = e => {
        api.toggleStatus(this.props.note._id)
            .then((res)=>{
                window.location.reload(true);
            })
    }

    delItem = e => {
        api.removeItemById(this.props.note._id)
            .then((res)=>{
                    window.location.reload(true);
            })
    }

    render() {
        let desc = _.truncate(this.props.note.description, {
            'length': 150,
            'separator': ' '
          });
        
        let Day = ["Sunday ", "Monday", "Tuesday ", "Wednesday", "Thursday", "Friday", "Saturday "]
        let Month = ["January","February","March","April","May","June","July", "August","September","October","November","December"]
        let date = Day[new Date(String(this.props.note.end_date)).getDay()] + " " + new Date(String(this.props.note.end_date)).getDate() + " " +  Month[new Date(String(this.props.note.end_date)).getMonth()] + " " +  new Date(String(this.props.note.end_date)).getFullYear()
        if(this.props.note.end_date == null) date = 'No DEADLINE'
        return(
            <Wrapper>
                <Left >
                    <Status onClick={this.toggle} status={this.props.note.status === 'Todo' ? "#FF0000" : "#00FF00"}/>
                </Left>
                <Right>
                    <Label size="24px" weight="700" color="#222222">{this.props.note.name}</Label>
                    <Label size="18px" weight="300" color="#545454">{desc}</Label>
                    <Div >
                        <Half>
                            <Label size="16px" weight="300" color="#949494">deadline: {date}</Label>
                        </Half>
                        <Half style={{justifyContent: 'flex-end'}}>
                            <Label onClick={this.handleShow} size="16px" weight="300" color="#4f485c" delete>more detail</Label>
                            <Label onClick={this.delItem} size="16px" weight="300" color="#cc0000" delete>delete</Label>
                        </Half>
                    </Div >
                </Right>

                <Modal show={this.state.show} onHide={this.handleHide} style={{fontFamily: 'Kanit'}} bsSize="large">
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.note.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{display: 'flex', flexDirection:'column'}}>
                        <Label size="24px" weight="500" color="#222222">description</Label>
                        <Label size="16px" weight="300" color="#4f485c">{this.props.note.description}</Label>
                        <Label style={{marginTop: '16px'}} size="24px" weight="500" color="#222222">deadline</Label>
                        <Label size="16px" weight="300" color="#4f485c">{date}</Label>
                    </Modal.Body>
                </Modal>
            </Wrapper>
        )
    }
}

export default Notebox