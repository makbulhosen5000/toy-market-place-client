import React from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import toast, { Toaster } from "react-hot-toast";

const Main = () => {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
        <Toaster />
      </div>
    );
};

export default Main;