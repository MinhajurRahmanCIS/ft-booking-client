import React, { useContext } from 'react';
import signup from '../../assets/signup/signup.jpg';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import {  useNavigate } from 'react-router-dom';
const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handelSignup = event => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const fullName = firstName + lastName;
        const nationality = form.nationality.value;
        const passport = form.passport.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password === confirmPassword) {
            const user = {
                firstName,
                lastName,
                fullName,
                nationality,
                passport,
                phone,
                email
            };
            // fetch('')
            //     .then(res => res.json())
            //     .then(data => {
            //         if (data) {
            //             toast.success('Account Created Successfully');

            //         }
            //     });

            createUser(email, password)
                .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    navigate('/')
                })
                .catch(err => console.log(err));
        }
        else {
            toast.error('Wrong Password')
        }
    };
    return (
        <div className="hero mt-10">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 justify-center items-center">
                <div>
                    <img className='' src={signup} alt="" />
                </div>
                <div className="md:w-11/12">
                    <form onSubmit={handelSignup} className="card-body border">
                        <h1 className="text-5xl text-center font-bold">Signup</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" name='firstName' placeholder="Enter Your First Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" name='lastName' placeholder="Enter Your Last Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Nationality</span>
                            </label>
                            <input type="text" name='nationality' placeholder="Enter Your Nationality" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Passport Number</span>
                            </label>
                            <input type="text" name='passport' placeholder="Enter Your Passport Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" name='phone' placeholder="Enter Your Phone Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmPassword' placeholder="Confirm Your Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Signup" />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;