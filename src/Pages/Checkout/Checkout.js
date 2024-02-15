import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const flightDetails = useLoaderData();
    const { _id, destination, price } = flightDetails;
    const navigate = useNavigate();

    const handelBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const nid = form.nid.value;
        const cardNumber = form.cardNumber.value;

        const flightBooking = {
            flight: _id,
            destination,
            name,
            email,
            nid,
            cardNumber,
            price
        };
        fetch('http://localhost:5000/flightBooking', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(flightBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('booking SuccessFully');
                    navigate('/');
                }
            })
    };
    return (
        <form onSubmit={handelBooking} className="card-body mt-2">
            <h1 className='text-3xl text-center font-bold'>Checkout</h1>
            <div className='grid md:grid-cols-2 gap-5'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered " required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' className="input input-bordered text-black font-bold" defaultValue={user?.email} disabled required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">NID Number</span>
                    </label>
                    <input type="text" name='nid' placeholder="Enter Your NID Number" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Card Number</span>
                    </label>
                    <input type="text" name='cardNumber' placeholder="Enter Your Card Number" className="input input-bordered" required />
                </div>
            </div>
            <div className="form-control  mt-6">
                <button type='submit' className="btn btn-primary text-white text-xl">Book</button>
            </div>
        </form>
    );
};

export default Checkout;