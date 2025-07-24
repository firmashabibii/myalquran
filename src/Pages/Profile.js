import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../Css/Profile.css';

function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user_login"));

  if (!user) {
    return <p>Belum login.</p>;
  }

  const handleEdit = () => {
    navigate("/edit-profile");
  };

  return (
    <motion.div
      className="profile-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2>Profil Saya</h2>

      <div className="profile-item">
        <strong>Username:</strong>
        <div className="profile-box">{user.username || '_'}</div>
      </div>

      <div className="profile-item">
        <strong>Email:</strong>
        <div className="profile-box">{user.email || '_'}</div>
      </div>

      <div className="profile-item">
        <strong>Tanggal Lahir:</strong>
        <div className="profile-box">{user.birthdate || '-'}</div>
      </div>

      <div className="profile-item">
        <strong>Hafalan Juz:</strong>
        <div className="profile-box">{user.juz || '-'}</div>
      </div>

      <div className="profile-item">
        <strong>Kota:</strong>
        <div className="profile-box">{user.city || '-'}</div>
      </div>

      <button className='edit' onClick={handleEdit}>Edit Profil</button>
    </motion.div>
  );
}

export default Profile;
