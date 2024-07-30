import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import '../assets/css/ContactUs.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onHandleName = (e) => {
    setName(e.target.value);
  };

  const onHandleEmail = (e) => {
    setEmail(e.target.value);
  };

  const onHandleMessage = (e) => {
    setMessage(e.target.value);
  };

  const onHandleSend = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div>
      <Navbar />
      <div className='Contact'>
        <h1>Contact Yoga Academy</h1>
        <form>
          <label>Name</label>
          <input type='text' placeholder='Enter your Name' onChange={onHandleName} />
          <label>Email</label>
          <input type='email' placeholder='Enter Email' onChange={onHandleEmail} />
          <label>Message</label>
          <textarea placeholder='Enter Message' onChange={onHandleMessage} />
          <button onClick={onHandleSend}>Send</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
