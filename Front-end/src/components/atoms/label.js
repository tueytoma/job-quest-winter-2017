import styled from 'styled-components'
import { font } from 'styled-theme'

const Label = styled.span`
    font-family: Kanit;
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    color: ${props => props.color};

    margin: 0 12px 0 12px;
    padding: ${props => props.topbar === true ? "10px 16px" : "0"};
    border-radius: 4px;
    background-color: ${props => props.dark === true ? "#cc0000" : "none"};
    text-shadow: ${props => props.title === true ? "4px 4px rgba(0, 0, 0, 0.25)" : "none"};

    transition: all 0.1s ease;

    &:hover  {
        text-decoration: ${props => props.delete ? "underline": "none"};
        background-color: ${props => props.topbar === true ? props.dark === true ? "rgba(204, 0, 0,0.6)" : "rgba(34,34,34,0.1)" : "none"};
        cursor: ${props => props.topbar || props.delete === true ? "pointer" : "deafault"};
    }
`

export default Label;