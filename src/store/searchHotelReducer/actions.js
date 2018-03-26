import axios from 'axios';
import BASE_URL from '../base_URL';

export function getCitiesList() {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_CITIES_START'
        });
        axios.get(BASE_URL)
            .then(function (response) {
                dispatch({
                    type: 'RECEIVE_CITIES',
                    payload: response.data
                })
            })
            .catch(function (error) {
                dispatch({
                    type: 'FETCH_CITIES_ERROR',
                    payload: error.data
                })
            });
    }
}

function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    return `${year}-${month < 10 ? '0' + month : month}-${day}`;
}

export function setNewDate(whichDate, value) {
    return (dispatch) => {
        dispatch({
            type: 'SET_NEW_DATE',
            payload: {
                whichDate: whichDate,
                value: formatDate(value)
            }
        });
    }
}

export function setCity(city) {
    return (dispatch) => {
        dispatch({
            type: 'SET_CITY',
            payload: city
        });
    }
}
