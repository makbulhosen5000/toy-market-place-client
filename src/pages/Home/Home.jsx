import React from 'react';
import useTitle from '../Title/UseTitle';
import Banner from '../Slider/Banner';
import ToyGallery from '../Toy/ToyGallery';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner/>
            <ToyGallery/>
        </div>
    );
};

export default Home;