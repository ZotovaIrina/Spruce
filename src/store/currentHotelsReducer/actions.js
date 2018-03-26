import axios from 'axios';
import BASE_URL from '../base_URL';

export function getCurrentHotels(city, checkIn, checkOut) {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_HOTELS_START'
        });
        axios.get(BASE_URL + city + '/hotels',
            {
                params: {
                    checkin: checkIn,
                    checkout: checkOut
                }

            })
            .then(function (response) {
                dispatch({
                    type: 'RECEIVE_HOTELS',
                    payload: response.data
                })
            })
            .catch(function (error) {
                dispatch({
                    type: 'FETCH_HOTELS_ERROR',
                    payload: error.data
                })
            });
    }
}

export function setHotel(hotel) {
    return (dispatch) => {
        dispatch({
            type: 'SET_HOTEL',
            payload: hotel
        });
    }
}
