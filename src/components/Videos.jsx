import React from 'react';
import Navbar from './Navbar';
import VideosBanner from './Videos/VideosBanner';
import VideosList from './Videos/VideosList';
import Footer from './Footer';

function Videos() {
  return (
    <>
    <Navbar></Navbar>
      <VideosBanner />
      <VideosList />
      <Footer/>
    </>
  )
}

export default Videos;