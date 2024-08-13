import React from 'react';
import banner from '../../assets/images/ny-videos__banner.jpeg';
import '../../assets/css/VideoBanner.css';

function VideosBanner() {
  return (
    <div className='ny-videos__banner'>
      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-md-6 ny-videos__banner__text">
            <h1 className='mb-1'>Yoga Video Library</h1>
            <br></br>
            <p className='mb-5'>
  Discover a wide range of yoga sessions led by seasoned instructors. These videos are crafted to help you improve flexibility, strength, and mental clarity, whether you're a beginner or an experienced practitioner.</p>

          </div>
          <div className="col-md-6 ny-videos__banner__img">
            <img src={banner} alt="woman in yoga pose" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideosBanner;
