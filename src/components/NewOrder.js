import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getOrderNumberOfSweets, getOrderErrorMessage, getOrderShowError } from '../_selectors/order.selectors';
import { setOrderNumberOfSweets } from '../_actions/order.actions';
import { calculateOrder } from '../_thunks/order.thunks';
import { StyledButton, StyledInput, InlineContainer, HiddenErrorMessageText, ErrorMessageText } from '../styling/commonStyles';


const NewOrder = ({ numberOfSweets, onOrderChanged, onOrderClicked, errorMessage, showError }) => {
    return (
        <>
            <InlineContainer>
                <StyledInput onChange={(event) => onOrderChanged(parseInt(event.target.value))} type="number" step="1" min="0" value={numberOfSweets} />
                <StyledButton onClick={(event) => onOrderClicked()} >Order</StyledButton>
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