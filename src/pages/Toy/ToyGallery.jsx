import React, { useEffect, useState } from 'react';
import Teddy from './Toy';


const ToyGallery = () => {
     
    const [teddies,setTeddies] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            fetch("teddy.json")
              .then((res) => res.json())
              .then((data) => setTeddies(data))
              .catch((error) => console.log(error));
              setLoading(false);
        },4000)
    },[])

    return (
      <div className="my-10">
        <h1 className="text-center font-bold text-2xl mb-10">
          <span className="text-red-600 ">Toy</span> Gallery
        </h1>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {teddies.map((teddy) => (
              <Teddy key={teddy._id} teddy={teddy} />
            ))}
          </div>
        )}
      </div>
    );
};

export default ToyGallery;