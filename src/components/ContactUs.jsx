import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import '../assets/css/ContactUs.css';
import ToasterFunc from './ToasterFunc';
import toast from 'react-hot-toast';
import aboutImage from '../assets/images/about1.jpg';  // Import the image
import sunil from '../assets/images/sunil.jpg';

const ContactUs = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "c1d2355c-eca8-49ff-a46a-0af94b3a3001");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            toast.success("Message sent successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div>
            <Navbar />
            <ToasterFunc />
            <div className="Contact">
                <div className="ContactContent">
                    <h1>Contact Us</h1>
                    <form onSubmit={onSubmit}>
                        <label>Name</label>
                        <input type="text" name="name" required />
                        <label>Email</label>
                        <input type="email" name="email" required />
                        <label>Phone</label>
                        <input type="text" name="phone" required />
                        <label>Message</label>
                        <textarea name="message" required></textarea>
                        <button type="submit">Submit Form</button>
                    </form>
                    <div className="ContactDetails">
                        <h2>Contact Details</h2>
                        <p>Email: <a href="mailto:michelle@signaturerealtynj.com">yogaAcademy@gamil.com</a></p>
                        <p>Phone: +91 9750704010</p>
                        <p><strong>Westfield</strong>: 233 North Avenue E., Westfield, NJ 07090</p>
                        <p><strong>Summit</strong>: 357 Springfield Ave., Summit, NJ 07901</p>
                        <p><strong>Short Hills Office</strong>: 549 Millburn Ave., Short Hills, NJ 07078</p>
                    </div>
                </div>
                <div className="ContactImage">
                    <img src={sunil} alt="About Us" />
                </div>
            </div>
            <span>{result}</span>
            <Footer />
        </div>
    );
}

export default ContactUs;
