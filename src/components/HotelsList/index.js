import React from 'react';

import Card from '../Card'

const HotelsList = (props) => (<div className="row">
        {props.hotels.length ?
            props.hotels.map((hotel, index) => (
                <Card img={hotel.photos[0].thumbnail}
                      key={index}
                      className="col-lg-3 col-6"
                      onClick={()=>props.onHotelClick(hotel)}
                      title={hotel.name}/>
            ))
            : ''}
    </div>
);

export default HotelsList;