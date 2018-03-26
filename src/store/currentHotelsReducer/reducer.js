const INITIAL_STATE = {
    fetching: false,
    fetched: false,
    error: null,
    data: [],
    currentHotel: null
};

export default function (state = INITIAL_STATE, action) {
    let newState = {...state};
    switch (action.type) {
        //start async request. fetching parameter can be used to show/hide loading indicator
        case 'FETCH_HOTELS_START': {
            newState.fetching = true;
            break;
        }
        //catch fetching error
        case 'FETCH_HOTELS_ERROR': {
            newState.fetching = false;
            newState.error = action.payload;
            break;
        }
        //receive fetching
        case 'RECEIVE_HOTELS': {
            newState.fetching = false;
            newState.fetched = true;
            newState.error = null;
            newState.currentHotel = null;
            newState.data = action.payload;
            break;
        }
        case 'SET_HOTEL': {
            newState.currentHotel = action.payload;
            break;
        }
        default:
            break;
    }
    return newState;
};