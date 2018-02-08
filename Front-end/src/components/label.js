import styled from 'styled-components'
import { font } from 'styled-theme'

const Label = styled.span`
    /* font-family: ${font('primary')}; */
    font-style: normal;
    font-size: ${props => props.textfield === true ? "18px" : props.error ? "12px" : props.size};
    font-weight: ${props => props.textfield === true ? "normal" : props.error ? "300" : props.weight};
    color: ${props => props.textfield === true ? "#545454" : props.error ? "#DC4444" : props.color};
    &:hover  {
        color: ${props => props.hover === true ? props.colorhover : props.color};
        cursor: ${props => props.hover === true ? "pointer" : "deafault"};
    }
`

export default Label;