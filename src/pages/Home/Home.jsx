import React from 'react';
import useTitle from '../Title/UseTitle';
import Banner from '../Slider/Banner';
import ToyGallery from '../Toy/ToyGallery';

import OldCollection from './ToyOldCollection/OldCollection';
import TeddyBears from './ReactTabs/TeddyBears';

const Home = () => {
    useTitle("Home")
    return (
        <div className='lg:mx-10'>
            <Banner/>
            <ToyGallery/>
            <TeddyBears/>
            <OldCollection/>
        </div>
    );
};

export default Home;