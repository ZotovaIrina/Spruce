import React from 'react';
import Card from '../Card';

const Hotel = ({hotel}) => (
    <div className="row">
        <h2 className="col-12">{hotel.name}</h2>
        <span className="col-12">{hotel.description}</span>
        <span className="col-10">
            Address: {hotel.address.postal_code}, {hotel.address.line1}, {hotel.address.city}, {hotel.address.region_name}, {hotel.address.country_name}
        </span>
        <div className="col-12">
            <div className="row">
                {hotel.photos.map((photo, index) => (
                    <Card img={photo.thumbnail}
                          key={index}
                          className="col-lg-2 col-3"
                          title={photo.caption}/>
                ))}
            </div>
        </div>

    </div>
);

export default Hotel;