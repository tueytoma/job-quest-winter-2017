import styled from 'styled-components'
import { font } from 'styled-theme'

const Label = styled.span`
    font-family: Kanit;
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    color: ${props => props.color};;
    line-height: 1;

    margin: 0 12px 0 12px;
    padding: 10px 16px;
    border-radius: 4px;
    background-color: ${props => props.dark === true ? "#cc0000" : "none"};
    text-shadow: 4px 4px rgba(0, 0, 0, 0.25);

    &:hover  {
        background-color: ${props => props.topbar === true ? props.dark === true ? "rgba(204, 0, 0,0.6)" : "rgba(34,34,34,0.1)" : "none"};
        cursor: ${props => props.topbar === true ? "pointer" : "deafault"};
    }
`

export default Label;