import React from 'react';
import styled from 'styled-components';

const InlineContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`;

const OrderInput = styled.input`
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
    border: 2px solid #00C851;
    &:focus {
        outline: none;
    }
`;

const OrderButton = styled.button`
    border-radius: 4px;
    font-size: large;
    font-weight: bold;
    color: white;
    flex-grow: 1;
    background-color: #00C851;
    border: 2px solid #00C851;
    margin: 4px;
    cursor: pointer;
    &:hover {
        background-color: #007E33;
        border: 2px solid #007E33;
    }
    &:focus {
        outline: none;
    }
`;

const NewOrder = () => {
    return (
        <InlineContainer>
            <OrderInput type="number" step="1" min="0" />
            <OrderButton >Order</OrderButton>
        </InlineContainer>
    )
}

export default NewOrder;