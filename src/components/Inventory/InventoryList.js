import React from 'react';
import { connect } from 'react-redux';
import { getSweetPackSizes } from '../../_selectors/inventory.selectors';
import InventoryItem from './InventoryItem';
import NewInventoryItem from './NewInventoryItem';

const InventoryList = ({ sweetPackSizes }) => {
    return (
        <>
            {sweetPackSizes.map((sweetPack, index) => (
                <InventoryItem text={sweetPack} key={index} index={index} />
            ))}
            <h6>Add New Sweet Pack</h6>
            <NewInventoryItem/>
        </>
    )
}

const mapStateToProps = (state) => ({
    sweetPackSizes: getSweetPackSizes(state)
});
const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(InventoryList);