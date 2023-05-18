import React, { useEffect, useState } from 'react';
import Teddy from './Teddy';

const ToyGallery = () => {
     
    const [teddies,setTeddies] = useState([]);
    console.log(teddies);
    useEffect(()=>{
        fetch('teddy.json')
        .then(res => res.json())
        .then(data => setTeddies(data))
        .catch(error=>console.log(error))
    },[])

    return (
      <div className="my-10">
        <h1 className="text-center font-bold text-2xl mb-10">
          <span className="text-red-600 ">Toy</span> Gallery {teddies.length}
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {teddies.map((teddy) => (
            <Teddy key={teddy._id} teddy={teddy} />
          ))}
        </div>
      </div>
    );
};

export default ToyGallery;