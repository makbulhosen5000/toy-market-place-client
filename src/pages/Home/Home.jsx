import React from 'react';
import useTitle from '../Title/UseTitle';
import Banner from '../Slider/Banner';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner/>
        </div>
    );
};

export default Home;