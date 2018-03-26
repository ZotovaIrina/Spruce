//noinspection JSUnresolvedVariable
import {combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import searchHotelReducer from './searchHotelReducer/reducer'
import currentHotelsReducer from './currentHotelsReducer/reducer'

const reducers = combineReducers({
    searchHotel: searchHotelReducer,
    currentHotels: currentHotelsReducer,
});

const error = (store) => (next) => (action) => {
    try {
        next(action);
    } catch (err) {
        console.log('Error: ', err);
    }

};

const middleware = applyMiddleware(thunk, logger, error);

const store = createStore(reducers, {}, middleware);

export default store;