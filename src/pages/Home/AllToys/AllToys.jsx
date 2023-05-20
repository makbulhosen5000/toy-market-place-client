import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToy from './AllToy';

const AllToys = () => {

    const allToys = useLoaderData();

    return (
        <div>
            {allToys.map(toy=><AllToy key={toy._id} toy={toy} />)}
        </div>
    );
};

export default AllToys;