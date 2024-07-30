import React, { useState, useEffect, useContext } from 'react';
import { postData, getData } from '../assets/JSON/API';
import '../assets/css/Signup.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ToasterFunc from './ToasterFunc';
import toast from 'react-hot-toast';
import { Context } from './GlobeData';
import signupimg from 'C:/Users/K.K. Vigneshwar/Desktop/yoga-academy-1/src/assets/images/signupimg1.jpg';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const { LogIn } = useContext(Context);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userRole = "User";
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const res = await getData();
            setData(res.data);
        };
        fetch();
    }, []);

    const onhandleLogin = () => {
        navigate('/login');
    };

    const onhandleEmail = (e) => {
        setEmail(e.target.value);
    };

    const onhandlePassword = (e) => {
        setPassword(e.target.value);
    };

    const onhandleUsername = (e) => {
        setUsername(e.target.value);
    };

    const onhandleSubmit = async (e) => {
        e.preventDefault();
        if (username === "") {
            toast.error('Username is required');
            return;
        } else if (email === "") {
            toast.error('Email is required');
            return;
        } else if (password === "") {
            toast.error('Password is required');
            return;
        }
        const uindex = data ? data.findIndex(({ uname }) => uname === username) : -1;
        if (uindex !== -1) {
            toast.error("Username already taken");
            return;
        } else {
            const emails = data.map(item => item.email);
            if (emails.includes(email)) {
                toast.error("Email already exists");
                return;
            } else {
                postData(username, email, password, userRole);
                LogIn(data[uindex]);
                toast.success("Signup successful");
                setTimeout(() => {
                    navigate('/home');
                }, 2000);
                return;
            }
        }
    };

    return (
        <div>
            <Navbar />
            <ToasterFunc />
            <div className="signup-container">
                <img src={signupimg} alt="Signup Illustration" />
                <div className="Signup">
                    <h1>Sign Up</h1>
                    <form onSubmit={onhandleSubmit}>
                        <label>
                            Username:
                            <input type="text" onChange={onhandleUsername} placeholder='Enter Any Username' />
                        </label>
                        <label>
                            Email:
                            <input type="email" onChange={onhandleEmail} placeholder='Enter your email' />
                        </label>
                        <label>
                            Password:
                            <input type="password" onChange={onhandlePassword} placeholder='Enter Any Password' />
                        </label>
                        <input type="submit" value="Sign Up" />
                        <p style={{color:'black'}}>Already have an account? <span onClick={onhandleLogin}>Login</span></p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Signup;
