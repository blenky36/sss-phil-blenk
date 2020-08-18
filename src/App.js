import React from 'react';
import styled from 'styled-components';
import NewOrder from './components/Order/NewOrder';
import OrderList from './components/Order/OrderList';
import InventoryList from './components/Inventory/InventoryList';

const AppContainer = styled.div`
    text-align: center;
`;
const HeaderContainer = styled.div`
    background-color: #282c34;
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;
const ContentContainer = styled.div`
    background-color: #282c34;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const App = () => (
    <AppContainer>
        <HeaderContainer>
            <h2><span role="img" aria-aria-label="lolly">🍭</span>Simon's Sweet Shop<span role="img" aria-aria-label="lolly">🍬</span></h2>
            <span>Please order how many sweets you would like:</span>
            <br />
            <NewOrder />
        </HeaderContainer>
        <ContentContainer>
            <OrderList />
            <h5>Inventory:</h5>
            <InventoryList />
        </ContentContainer>
    </AppContainer>
);

export default App;
