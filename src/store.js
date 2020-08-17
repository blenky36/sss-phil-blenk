import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { orderReducer } from './_reducers/order.reducer';
import { inventoryReducer } from './_reducers/inventory.reducer';


const reducers = {
    orderReducer,
    inventoryReducer
};

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
    createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );