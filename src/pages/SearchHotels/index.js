import React from 'react';
import {connect} from 'react-redux';
import {
    getCitiesList,
    setNewDate,
    setCity
} from '../../store/searchHotelReducer/actions';
import {
    getCurrentHotels,
    setHotel
} from '../../store/currentHotelsReducer/actions';

import HotelsList from '../../components/HotelsList';
import Hotel from '../../components/Hotel';


//container component
class SearchHotels extends React.Component {
    constructor(props) {
        super(props);
        //Getting city list and set default checkin and checkout dates
        this.props.getCitiesList();
        this.props.setDefaultDates();
    }

    changeDate(event, whichDate) {
        let value = event.target.value;
        this.props.setNewDate(whichDate, new Date(value));
    }

    changeCity(event) {
        let value = event.target.value;
        this.props.setCity(value);
    }

    submitForm(e) {
        e.preventDefault();
        this.props.getCurrentHotels(this.props.selectCity, this.props.checkIn, this.props.checkOut)
    }

    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.submitForm(e)}>
                    <div className="row">
                        <span className="col-6">Choice check in date</span>
                        <input id="checkIn"
                               type="date"
                               value={this.props.checkIn}
                               onChange={(e)=>this.changeDate(e, 'checkIn')}
                               className="col-6"/>
                    </div>
                    <div className="row">
                        <span className="col-6">Choice check out date</span>
                        <input id="checkOut"
                               type="date"
                               value={this.props.checkOut}
                               onChange={(e)=>this.changeDate(e, 'checkOut')}
                               className="col-6"/>
                    </div>
                    <div className="row">
                        <span className="col-6">Choice city</span>
                        <select name="city"
                                className="col-6"
                                value={this.props.selectedCity}
                                onChange={(e)=> this.changeCity(e)}>
                            {this.props.cities.map((city, index) => (
                                <option key={city.id}
                                        value={city.id}>
                                    {city.full_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit">Find Hotels</button>
                </form>

                {this.props.currentHotel ?
                    (<div>
                        <button onClick={()=>this.props.setHotel(null)}>
                            Back
                        </button>
                        <Hotel hotel={this.props.currentHotel}/>
                    </div>) :
                    <HotelsList hotels={this.props.hotels}
                                onHotelClick={this.props.setHotel}/>
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cities: state.searchHotel.cities,
        checkIn: state.searchHotel.checkIn,
        checkOut: state.searchHotel.checkOut,
        selectCity: state.searchHotel.selectedCity,
        hotels: state.currentHotels.data,
        currentHotel: state.currentHotels.currentHotel
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCitiesList: () => {
            dispatch(getCitiesList())
        },
        setNewDate: (whichDate, value) => {
            dispatch(setNewDate(whichDate, value))
        },
        setCity: (whichDate, value) => {
            dispatch(setCity(whichDate, value))
        },
        setDefaultDates: () => {
            const TODAY = new Date();
            dispatch(setNewDate('checkIn', TODAY));
            dispatch(setNewDate('checkOut', new Date(TODAY.getTime() + (24 * 60 * 60 * 1000))));
        },
        getCurrentHotels: (city, checkIn, checkOut) => {
            dispatch(getCurrentHotels(city, checkIn, checkOut))
        },
        setHotel: (hotel) => {
            dispatch(setHotel(hotel))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchHotels);