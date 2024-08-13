import React, { useContext, useState } from 'react';
import { Context } from './GlobeData';
import { setNewUserPassword } from '../assets/JSON/API';
import '../assets/css/Profile.css';
import Navbar from './Navbar';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ToasterFunc from './ToasterFunc';

const ProfilePage = () => {
    const { userData, setUserData, LogOut } = useContext(Context);
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();

    const handlePasswordChange = async () => {
        if (newPassword.trim() === '') {
            toast.error('Password cannot be empty');
            return;
        }

        const updatedUser = {
            ...userData,
            password: newPassword,
        };

        try {
            await setNewUserPassword(userData.id, updatedUser);
            setUserData(updatedUser);
            localStorage.setItem('userData', JSON.stringify(updatedUser));
            toast.success('Password updated successfully');
        } catch (error) {
            console.error('Error updating password', error);
            toast.error('Failed to update password');
        }
    };

    const handleLogout = () => {
        LogOut();
        toast.success("Logout Successful");
        setTimeout(() => {
            navigate('/home');
        }, 2000);
    };

    return (
        <>
            <Navbar />
            <ToasterFunc />
            <div className="profile-container">
                <div className='profile-card1'>
                </div>
                <div className="profile-card">
                    <h1 className="profile-title">User Profile</h1>
                    <div className="profile-info">
                        <p><strong>Username:</strong> {userData.uname}</p>
                        <p><strong>Email:</strong> {userData.email}</p>
                    </div>
                    <div className="profile-edit">
                        <h2>Edit Password</h2>
                        <input 
                            type="password" 
                            placeholder="New Password" 
                            value={newPassword} 
                            onChange={(e) => setNewPassword(e.target.value)} 
                        />
                        <button onClick={handlePasswordChange}>Save Password</button>
                    </div>
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
