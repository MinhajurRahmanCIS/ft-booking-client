import React from 'react';

const FlightListing = ({ flight }) => {
    const { image, departureCity, destination, departureTime, arrivalTime, price, airline } = flight;
    return (
        <div className="card rounded-none bg-base-100 shadow-xl">
            <figure><img className='h-60 w-full' src={image} alt="flights" /></figure>
            <div className="card-body">

                <div className="card-actions justify-end">
                    <div className="badge btn-outline">{airline}</div>
                </div>
                <p><strong>Destination : </strong>{destination}</p>
                <p><strong>Departure City : </strong>{departureCity}</p>
                <p><strong>Departure Time : </strong>{departureTime}</p>
                <p><strong>Arrival Time : </strong>{arrivalTime}</p>
                <p><strong>Price : </strong>${price}</p>
                <div className="card-actions justify-end">
                    <button className='btn btn-info btn-md'>Book</button>
                </div>
            </div>
        </div>
    );
};

export default FlightListing;