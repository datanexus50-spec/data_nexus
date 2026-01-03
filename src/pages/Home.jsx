import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Reviews from '../components/sections/Reviews';
import Contact from '../components/sections/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Reviews />
            <Contact />
        </>
    );
};

export default Home;
