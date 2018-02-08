import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styled from 'styled-components'

import Label from '../atoms/label'

const Wrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
`

class Typed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word : ["TO-DO WEBSITE", "Do your Work", "Done your LIFE"],
            typed : "",
            typed_len: 0,
            istyped: true,
            position: 0
        }
    }

    tick() {
        if(this.state.istyped){
        let str = this.state.word[this.state.position].substring(0,this.state.typed_len);
        this.setState({typed : str});
        if(this.state.typed_len <= this.state.word[this.state.position].length+10) 
            this.setState({typed_len : this.state.typed_len+1});
        else
            this.setState({istyped : false});
        
        }
    }
   tick2(){
       if(!this.state.istyped){
            let str = this.state.word[this.state.position].substring(0,this.state.typed_len);
            this.setState({typed : str});
            this.setState((p) => ({typed_len : p.typed_len-1}));
            if(this.state.typed_len == -5)  {
                if(this.state.position < this.state.word.length-1) 
                    this.setState({position : this.state.position+1});
                else  this.setState({position : 0});
                this.setState({istyped : true}); 
            }
       }
    }

    componentDidMount() {
            this.interval = setInterval(() => this.tick(), 300);
            this.interval2 = setInterval(() => this.tick2(), 100);

    }

    componentWillUnmount() {
        clearInterval(this.interval);
        clearInterval(this.interval2);
    }

    render() {
        return (
            <Wrapper>
                <Label size="72px" weight="900" color="white">
                    {this.state.typed}|
                </Label>
            </Wrapper>
         );
     }
}

export default Typed;