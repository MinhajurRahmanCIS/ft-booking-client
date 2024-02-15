import React, { useEffect, useState } from 'react';
import FlightListing from './FlightListing';

const FlightListings = () => {
    const [flights, setFlights] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/flights')
            .then(res => res.json())
            .then(data => setFlights(data));
    }, []);
    return (
        <div>
            <div className="divider divider-neutral my-10">Flights</div>
            <div className='grid grid-col-1 md:grid-cols-3 gap-5'>

                {
                    flights.map(flight =>
                        <FlightListing
                            key={flight._id}
                            flight={flight}
                        >
                        </FlightListing>)
                }
            </div>
        </div>
    );
};

export default FlightListings;