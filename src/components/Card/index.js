import React from 'react';

const Card = ({img, title, className, onClick}) => (
    <div className={`card-deck ${className}`}
    onClick={onClick}>
        <div className="card">
            <img className="card-img-top"
                 src={img}
                 alt={title}/>
            <span className="card-title">{title}</span>
        </div>
    </div>
);

export default Card;