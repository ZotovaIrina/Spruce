const INITIAL_STATE = {
    fetching: false,
    fetched: false,
    error: null,
    cities: [],
    checkIn: '',
    checkOut: '',
    selectedCity: ''
};

export default function (state = INITIAL_STATE, action) {
    let newState = {...state};
    switch (action.type) {
        //start async request. Fetching parameter can be used to show/hide loading indicator
        case 'FETCH_CITIES_START': {
            newState.fetching = true;
            break;
        }
        //catch fetching error
        case 'FETCH_CITIES_ERROR': {
            newState.fetching = false;
            newState.error = action.payload;
            break;
        }
        //receive fetching
        case 'RECEIVE_CITIES': {
            newState.fetching = false;
            newState.fetched = true;
            newState.error = null;
            newState.cities = [...action.payload];
            if (newState.cities.length) {
                newState.selectedCity = newState.cities[0].id;
            }
            break;
        }
        case 'SET_NEW_DATE': {
            newState[action.payload.whichDate] = action.payload.value;
            break;
        }
        case 'SET_CITY': {
            newState.selectedCity = action.payload;
            break;
        }
        default:
            break;
    }
    return newState;
};