import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../assets/css/About.css';

const About = () => {
  return (
    <div className='about-page'>
      <Navbar />
      <div className='about-container'>
        <header className='about-header'>
          <h1>About Yoga Academy</h1>
        </header>
        <section className='about-content'>
          <div className='about-section'>
            <h2>Our Mission</h2>
            <p>At Yoga Academy, our mission is to promote physical and mental well-being through the practice of yoga. We offer a wide range of classes for all levels, from beginners to advanced practitioners. Our goal is to create a community where everyone can find peace, strength, and flexibility.</p>
          </div>
          <div className='about-section'>
            <h2>Our Instructors</h2>
            <p>Our team of experienced and certified instructors is dedicated to helping you achieve your wellness goals. Each instructor brings their unique style and expertise to create a supportive and enriching environment. They are passionate about yoga and committed to guiding you on your journey to better health.</p>
          </div>
          <div className='about-section'>
            <h2>Our Facilities</h2>
            <p>Our state-of-the-art facilities are designed to provide a tranquil and comfortable setting for your yoga practice. We offer spacious studios, modern equipment, and a serene atmosphere to enhance your experience. Our facilities are equipped with everything you need to enjoy a relaxing and rejuvenating yoga session.</p>
          </div>
          <div className='about-section'>
            <h2>Our Community</h2>
            <p>We believe in the power of community and strive to create a welcoming space where everyone feels valued. Our community is made up of individuals from all walks of life, united by their love for yoga. Join us and become part of a supportive and inspiring community that encourages growth and well-being.</p>
          </div>
          <div className='about-section'>
            <h2>Join Us</h2>
            <p>Whether you are looking to improve your physical fitness, reduce stress, or find inner peace, Yoga Academy is here to help. Join us today and start your journey towards a healthier, happier you. Our doors are always open, and we can't wait to welcome you to our yoga family.</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
