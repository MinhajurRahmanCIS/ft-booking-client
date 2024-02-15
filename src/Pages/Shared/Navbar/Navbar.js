import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const menu =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/flights'>Flights</Link></li>
        </>
        ;

    const handelLogout = () => {
        logout()
            .then()
            .catch()
    };
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">Flight Ticket Booking</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {
                    user?.uid ?
                        <>
                            <button onClick={handelLogout} className="btn btn-md text-white btn-error">Logout</button>

                            <div className="avatar online">
                                {
                                    user?.photoURL === null ?
                                        <span className='text-4xl'><FaUserCircle /></span>
                                        :
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} alt='' />
                                        </div>
                                }
                            </div>
                        </>

                        :
                        <>
                            <Link to='/signup' className="btn btn-md text-white btn-info">Signup</Link>
                            <Link to='/login' className="btn btn-md text-white btn-accent">Login</Link>
                        </>

                }
            </div>
        </div>
    );
};

export default Navbar;