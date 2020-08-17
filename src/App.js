import React from 'react';
import styled from 'styled-components';
import NewOrder from './components/NewOrder';
import OrderList from './components/OrderList';

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
            <h2>🍭Simon's Sweet Shop🍬</h2>
            <span>Please order how many sweets you would like:</span>
            <br/>
            <NewOrder />
        </HeaderContainer>
        <ContentContainer>
            <OrderList />
        </ContentContainer>
    </AppContainer>
);

export default App;
