// components/layout/AppLayout.jsx
import React from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-grow"><Outlet/></main>
      <Footer />
    </div>
  );
};

export default AppLayout;
