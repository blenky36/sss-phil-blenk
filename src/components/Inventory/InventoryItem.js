import React from 'react';
import { connect } from 'react-redux';
import { InlineContainer, StyledButton } from '../../styling/commonStyles';
import { removeSweetPackSize } from '../../_actions/inventory.actions';
import styled from 'styled-components';

const InventoryText = styled.span`
    font-size: large;
    flex-grow: 4;
    font-weight: bold;
`;


const InventoryItem = ({ text, index, onDeleteSweetPackClicked }) => {
    return (
        <InlineContainer key={index}>
            <InventoryText>{text}</InventoryText>
            &nbsp;
            <StyledButton color="#ff4444" hoverColor="#CC0000" onClick={(e) => onDeleteSweetPackClicked(text)}>Delete</StyledButton>
        </InlineContainer>
    )
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
    onDeleteSweetPackClicked: (sweetPackSize) => dispatch(removeSweetPackSize(sweetPackSize))
});
export default connect(mapStateToProps, mapDispatchToProps)(InventoryItem);