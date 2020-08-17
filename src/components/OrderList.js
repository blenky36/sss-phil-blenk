import React from 'react';
import { connect } from 'react-redux';
import { getOrderOutputSweetPacks } from '../_selectors/order.selectors';

const OrderList = () => {
    // const orderOutputSweetPacks = { 500: 1, 3000: 2 };
    const orderOutputSweetPacks = {  };

    const isEmpty = (obj) => {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }
        return true;
    }

    const getOrderList = () => {
        const sweetPackList = [];

        if (!orderOutputSweetPacks || isEmpty(orderOutputSweetPacks)) {
            sweetPackList.push(
                <tr>
                    <td colSpan="2"><i>Please order some sweets.</i></td>
                </tr>
            )
        } else {
            for (const sweetPack in orderOutputSweetPacks) {
                sweetPackList.push(
                    <tr>
                        <td>{sweetPack}</td>
                        <td>{orderOutputSweetPacks[sweetPack]}</td>
                    </tr>
                )
            }
        }
        return sweetPackList;
    }

    return (
        <table>
            <thead>
                <td>Sweet Pack Size</td>
                <td>Quantity</td>
            </thead>
            <tbody>
                {getOrderList()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({
    orderOutputSweetPacks: getOrderOutputSweetPacks(state)
});

export default connect(mapStateToProps)(OrderList);