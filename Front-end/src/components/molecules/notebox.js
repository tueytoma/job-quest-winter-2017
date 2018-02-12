import React from 'react'
import styled, { css } from 'styled-components'
import api from '../../api'

import Label from '../atoms/label'

const ButtonWrapper = styled.button`

`

const Wrapper = styled.div`
    /* background: #7289da; */
    width: 80%;
    height: 150px;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: flex-end;
    flex-direction: row;

    margin: 8px 0 8px 0;
    padding-bottom: 8px;
    border-bottom: 2px solid rgba(200,200,200,0.5);
`

const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;

`

const Right = styled.div`
    /* background: #00FF00; */
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

    &:hover {
        cursor: pointer;
        background: ${props => props.status == "#FF0000" ? "rgba(240,0,0,0.8)" : "rgba(0,240,0,0.8)"};
    }
`


class Notebox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }

    toggle = e => {
        api.toggleStatus(this.props.note._id)
            .then((res)=>{
                    // console.log(res)
                    window.location.reload(true);
                    // console.log("SUCCESS")
            })
    }

    delItem = e => {
        api.removeItemById(this.props.note._id)
            .then((res)=>{
                    // console.log(res)
                    window.location.reload(true);
                    // console.log("SUCCESS")
            })
    }

    render() {
        let Day = ["Sunday ", "Monday", "Tuesday ", "Wednesday", "Thursday", "Friday", "Saturday "]
        let Month = ["January","February","March","April","May","June","July", "August","September","October","November","December"]
        let date = Day[new Date(String(this.props.note.end_date)).getDay()] + " " + new Date(String(this.props.note.end_date)).getDate() + " " +  Month[new Date(String(this.props.note.end_date)).getMonth()] + " " +  new Date(String(this.props.note.end_date)).getFullYear()
        return(
            <Wrapper>
                <Left >
                    <Status onClick={this.toggle} status={this.props.note.status == 'Todo' ? "#FF0000" : "#00FF00"}/>
                </Left>
                <Right>
                    <Label size="24px" weight="900" color="#222222">{this.props.note.name}</Label>
                    <Label size="18px" weight="100" color="#545454">{this.props.note.description}</Label>
                    <Div >
                        <Half>
                            <Label size="16px" weight="100" color="#949494">deadline: {date}</Label>
                        </Half>
                        <Half style={{justifyContent: 'flex-end'}}>
                            <Label onClick={this.delItem} size="16px" weight="100" color="#cc0000" delete>delete</Label>
                        </Half>
                    </Div >
                </Right>
            </Wrapper>
        )
    }
}

export default Notebox