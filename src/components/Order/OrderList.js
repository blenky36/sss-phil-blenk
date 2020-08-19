import React from 'react';
import { connect } from 'react-redux';
import { getOrderOutputSweetPacks } from '../../_selectors/order.selectors';
import styled from 'styled-components';

const Table = styled.table`
    border-collapse: collapse;
    font-size: 75%;
`;

const TableHead = styled.thead`
    border-radius: 4px;
    border: 1px solid #00C851;    
    background-color: #00C851;
    font-weight: bold;
`;

const TableData = styled.td`
    padding: 15px;
`;

const isEmpty = (obj) => {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

const getOrderList = (orderOutputSweetPacks) => {
    const sweetPackList = [];

    if (!orderOutputSweetPacks || isEmpty(orderOutputSweetPacks)) {
        sweetPackList.push(
            <tr key={0}>
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

const OrderList = ({ orderOutputSweetPacks }) => (
    <Table>
        <TableHead>
            <TableData>Sweet Pack Size</TableData>
            <TableData>Quantity</TableData>
        </TableHead>
        <tbody>
            {getOrderList(orderOutputSweetPacks)}
        </tbody>
    </Table>
)


const mapStateToProps = state => ({
    orderOutputSweetPacks: getOrderOutputSweetPacks(state)
});

export default connect(mapStateToProps)(OrderList);