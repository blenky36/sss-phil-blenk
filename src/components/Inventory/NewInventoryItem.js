import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getInventoryErrorMessage, getInventoryShowError } from '../../_selectors/inventory.selectors';
import { addInventoryItem } from '../../_thunks/inventory.thunks';
import { StyledButton, StyledInput, InlineContainer, ErrorMessageText, HiddenErrorMessageText } from '../../styling/commonStyles';

const NewInventoryItem = ({ onAddInventoryItemClicked, errorMessage, showError }) => {
    const [newInventoryItem, setNewInventoryItem] = useState(0);
    return (
        <>
            <InlineContainer>
                <StyledInput color="#33b5e5" onChange={(e) => setNewInventoryItem(e.target.value)} type="number" step="1" min="0" value={newInventoryItem} />
                <StyledButton color="#33b5e5" hoverColor="#0099CC" onClick={(event) => onAddInventoryItemClicked(newInventoryItem)} >Add</StyledButton>
            </InlineContainer>
            {showError ? <ErrorMessageText>{errorMessage}</ErrorMessageText> : <HiddenErrorMessageText>Text</HiddenErrorMessageText>}
        </>
    )
}

const mapStateToProps = state => ({
    errorMessage: getInventoryErrorMessage(state),
    showError: getInventoryShowError(state)
});
const mapDispatchToProps = dispatch => ({
    onAddInventoryItemClicked: (sweetPackSize) => dispatch(addInventoryItem(parseInt(sweetPackSize)))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewInventoryItem);