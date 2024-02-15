import React from 'react';
import Banner from '../Banner/Banner';
import FlightListings from '../FlightListings/FlightListings';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FlightListings></FlightListings>
            <Footer></Footer>
        </div>
    );
};

export default Home;