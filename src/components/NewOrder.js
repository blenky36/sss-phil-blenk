import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getOrderNumberOfSweets, getOrderErrorMessage, getOrderShowError } from '../_selectors/order.selectors';
import { setOrderNumberOfSweets } from '../_actions/order.actions';
import { calculateOrder } from '../_thunks/order.thunks';

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

const ErrorMessageText = styled.p`
    color: red;
    font-size: large;
`;

const HiddenErrorMessageText = styled.p`
    color: #ffffff00;
    font-size: large;
`;

const NewOrder = ({ numberOfSweets, onOrderChanged, onOrderClicked, errorMessage, showError }) => {
    return (
        <>
            <InlineContainer>
                <OrderInput onChange={(event) => onOrderChanged(parseInt(event.target.value))} type="number" step="1" min="0" value={numberOfSweets} />
                <OrderButton onClick={(event) => onOrderClicked()} >Order</OrderButton>
            </InlineContainer>
            {showError ? <ErrorMessageText>{errorMessage}</ErrorMessageText> : <HiddenErrorMessageText>Text</HiddenErrorMessageText>}
        </>
    )
}

const mapStateToProps = state => ({
    numberOfSweets: getOrderNumberOfSweets(state),
    errorMessage: getOrderErrorMessage(state),
    showError: getOrderShowError(state)
});
const mapDispatchToProps = dispatch => ({
    onOrderChanged: (numberOfSweets) => dispatch(setOrderNumberOfSweets(numberOfSweets)),
    onOrderClicked: () => dispatch(calculateOrder())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewOrder);