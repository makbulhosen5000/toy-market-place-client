import React, { useContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { AuthContext } from '../../../Provider/AuthProvider';
import TeddyBear from './TeddyBear';
import Horses from './Horses';
import Dinosaurs from './Dinosaurs';

const teddyBears = () => {

    const { teddyBears, horses, dinosaurs, loading } = useContext(AuthContext);

    return (
      <div className="">
        <h1 className="text-center font-bold text-2xl mb-10">
          <span className="text-red-600 ">Animal</span> Toy
        </h1>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <Tabs className="text-center">
            <TabList className="flex justify-center items-center gap-6 ">
              {/* dinosaur */}
              <Tab className=" bg-blue-600 p-2 text-white rounded-md">
                Teddy Bear
              </Tab>
              <Tab className=" bg-blue-600 p-2 text-white rounded-md">
                Horse
              </Tab>
              <Tab className=" bg-blue-600 p-2 text-white rounded-md">
                Dinosaur
              </Tab>
            </TabList>

            <TabPanel>
              <div className="flex lg:justify-center items-center h-screen gap-4 ">
                {teddyBears.map((teddyBear) => (
                  <TeddyBear key={teddyBear._id} teddyBear={teddyBear} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex lg:justify-center items-center h-screen gap-4 ">
                {horses.map((horse) => (
                  <Horses key={horse._id}  horse={horse} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex lg:justify-center items-center h-screen gap-12 ">
                {dinosaurs.map((dinosaur) => (
                  <Dinosaurs key={dinosaur._id} dinosaur={dinosaur} />
                ))}
              </div>
            </TabPanel>
          </Tabs>
        )}
      </div>
    );
};

export default teddyBears;