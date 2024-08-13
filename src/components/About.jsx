import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../assets/css/About.css';
import about1 from '../assets/images/about1.jpg';
import about2 from '../assets/images/about2.jpg';
import about3 from '../assets/images/about3.jpg';
// import img7 from '../assets/images/img7.jpg';
import about4 from '../assets/images/about4.jpg';
import vision from '../assets/images/vision.png';
import mission from '../assets/images/Mission.png';
import sunil from '../assets/images/sunil.jpg';
import sunil1 from '../assets/images/sunil1.jpg';


const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <header className="about-header">
          <h1>About Yoga Academy</h1>
          <p>Inner Peace To Your Body And Mind</p>
        </header>
        <section className="about-content">
          <div className="about-section">
            <div className="image-container">
              <img src={about4} alt="Yoga practice" height={'500px'}/>
            </div>
            <div className="text-container">
              <h2>Unique Practices and Techniques</h2>
              <div className="technique">
                <h3>Meditation Retreats</h3>
                <p>The path to a life of serenity through meditation and concentration.</p>
              </div>
              <div className="technique">
                <h3>Yoga Retreats</h3>
                <p>Travel to places of natural beauty for a rejuvenating experience.</p>
              </div>
              <div className="technique">
                <h3>Strength & Stability</h3>
                <p>Small progress each day leads to big results.</p>
              </div>
              <div className="technique">
                <h3>Cleansing Techniques</h3>
                <p>Shatkriyas are internal cleansing techniques rarely taught these days.</p>
              </div>
            </div>
          </div>
          <div className="about-section">
            <h2>Our Vision</h2>
            <div className="vision-content">
              <img src={vision} alt="vision" className="vision-image" />
              <p>“To be a beacon of holistic wellness, empowering women with PCOS and fertility challenges to embrace the transformative power of yoga and a healthy diet for a balanced, healthier life.”</p>
            </div>
          </div>
          <div className="about-section">
            <h2>Our Mission</h2>
            <div className="mission-content">
              <img src={mission} alt="Mission" className="mission-image" />
              <p>“To be a beacon of holistic wellness, empowering women with PCOS and fertility challenges to embrace the transformative power of yoga and a healthy diet for a balanced, healthier life.”</p>
            </div>
          </div>



          <div className="about-section">
            <h2>Our Facilities</h2>
            <div className="facilities-container">
              <div className="facility-card">
                <img src={about1} alt="Spacious Studios" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>Spacious Studios</h3>
                    <p>Our spacious studios are designed to provide a serene and inspiring environment for your practice, ensuring ample space for individual and group sessions.</p>
                  </div>
                </div>
              </div>
              <div className="facility-card">
                <img src={about2} alt="Modern Amenities" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>Modern Amenities</h3>
                    <p>We offer a range of modern amenities, including high-speed Wi-Fi, air conditioning, and state-of-the-art equipment, to enhance your comfort and convenience.</p>
                  </div>
                </div>
              </div>
              <div className="facility-card">
                <img src={about3} alt="Relaxing Lounge" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>Relaxing Lounge</h3>
                    <p>Our relaxing lounge area is a perfect place to unwind before or after your practice. Enjoy comfortable seating and a peaceful atmosphere.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="about-section">
            <h2>Our Instructors</h2>
            <div className="instructors-container">
              <div className="instructor-card">
                <img src={sunil1} alt="Instructor" />
                <div className="instructor-info">
                  <h3>Instructor Name</h3>
                  <p>Qualification</p>
                  <p>Brief bio or description</p>
                </div>
              </div>
              <div className="instructor-card">
                <img src={sunil1} alt="Instructor" />
                <div className="instructor-info">
                  <h3>Instructor Name</h3>
                  <p>Qualification</p>
                  <p>Brief bio or description</p>
                </div>
              </div>
              <div className="instructor-card">
                <img src={sunil1} alt="Instructor" />
                <div className="instructor-info">
                  <h3>Instructor Name</h3>
                  <p>Qualification</p>
                  <p>Brief bio or description</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
