import styled from 'styled-components';

export const InlineContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`;

export const StyledInput = styled.input`
    border-radius: 4px;
    color: white;
    width: 100%;
    padding: 10px 16px;
    font-size: large;
    font-weight: bold;
    margin: 8px 0;
    background-color: #ffffff00;
    flex-grow: 4;
    box-sizing: border-box;
    margin: 4px;
    border: 2px solid ${props => props.color ? props.color : '#00C851'};
    &:focus {
        outline: none;
    }
`;

export const StyledButton = styled.button`
    border-radius: 4px;
    font-size: large;
    font-weight: bold;
    color: white;
    flex-grow: 1;
    background-color: ${props => props.color ? props.color : '#00C851'};
    border: 2px solid ${props => props.color ? props.color : '#00C851'};
    margin: 4px;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.hoverColor ? props.hoverColor : '#007E33'};
        border: 2px solid ${props => props.hoverColor ? props.hoverColor : '#007E33'};
    }
    &:focus {
        outline: none;
    }
`;

export const ErrorMessageText = styled.p`
    color: red;
    font-size: large;
`;

export const HiddenErrorMessageText = styled.p`
    color: #ffffff00;
    font-size: large;
`;