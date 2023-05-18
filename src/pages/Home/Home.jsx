import React from 'react';
import useTitle from '../Title/UseTitle';
import Banner from '../Slider/Banner';
import ToyGallery from '../Toy/ToyGallery';
import ReactTabs from './ReactTabs/teddyBears';

const Home = () => {
    useTitle("Home")
    return (
        <div className='mx-10'>
            <Banner/>
            <ToyGallery/>
            <ReactTabs/>
        </div>
    );
};

export default Home;