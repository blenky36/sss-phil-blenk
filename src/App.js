import React from 'react';
import styled from 'styled-components';
import NewOrder from './components/NewOrder';

const AppContainer = styled.div`
    text-align: center;
`;
const HeaderContainer = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    </AppContainer>
);

export default App;
