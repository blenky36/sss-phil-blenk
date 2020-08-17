import React from 'react';
import { connect } from 'react-redux';
import { getOrderOutputSweetPacks } from '../_selectors/order.selectors';
import styled from 'styled-components';

const Table = styled.table`
    border-collapse: collapse;
    font-size: 80%;
    font-weight: bold;
`;

const TableHead = styled.thead`
    border-radius: 4px;
    border: 1px solid #00C851;    
    background-color: #00C851;
`;

const TableData = styled.td`
    padding: 15px;
`;

const OrderList = () => {
    const orderOutputSweetPacks = { 500: 1, 3000: 2 };

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
                    <TableData colSpan="2"><i>Please order some sweets.</i></TableData>
                </tr>
            )
        } else {
            for (const sweetPack in orderOutputSweetPacks) {
                sweetPackList.push(
                    <tr>
                        <TableData>{sweetPack}</TableData>
                        <TableData>{orderOutputSweetPacks[sweetPack]}</TableData>
                    </tr>
                )
            }
        }
        return sweetPackList;
    }

    return (
        <Table>
            <TableHead>
                <TableData>Sweet Pack Size</TableData>
                <TableData>Quantity</TableData>
            </TableHead>
            <tbody>
                {getOrderList()}
            </tbody>
        </Table>
    )
}

const mapStateToProps = state => ({
    orderOutputSweetPacks: getOrderOutputSweetPacks(state)
});

export default connect(mapStateToProps)(OrderList);