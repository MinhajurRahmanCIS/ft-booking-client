import React, { useEffect, useState } from 'react';
import Flight from './Flight';

const AllFlights = () => {
    const [flights, setFlights] = useState([]);
    console.log(flights)
    const handelSearch = event => {
        event.preventDefault();
        const form = event.target;
        const search = form.search.value;
        console.log(search);
    };

    useEffect(() => {
        fetch('http://localhost:5000/flights')
            .then(res => res.json())
            .then(data => setFlights(data));
    }, []);


    return (
        <div className='mt-5'>
            <form onSubmit={handelSearch}>
                <label className="input input-bordered flex items-center gap-2 rounded-none">
                    <input type="text" name='search' className="grow" placeholder="Search" />
                    <button type='submit' className='hover:bg-slate-400'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
                </label>
            </form>
            <div className='grid grid-col-1 md:grid-cols-3 gap-5 mt-5'>
                {
                    flights.map(flight => <Flight
                        key={flight._id}
                        flight={flight}
                    >

                    </Flight>)
                }
            </div>

        </div>
    );
};

export default AllFlights;