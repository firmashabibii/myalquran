import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/EditProfile.css';

function EditProfile() {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user_login"));

  const [username, setUsername] = useState(storedUser?.username || '');
  const [birthdate, setBirthdate] = useState(storedUser?.birthdate || '');
  const [juz, setJuz] = useState(storedUser?.juz || '');
  const [city, setCity] = useState(storedUser?.city || '');

  if (!storedUser) {
    return <p>Belum login.</p>;
  }

  const handleSave = () => {
    if (!username || !birthdate || !juz || !city) {
      alert("Semua field harus diisi!");
      return;
    }

    const updatedUser = { ...storedUser, username, birthdate, juz, city };

    // Update user_login
    localStorage.setItem("user_login", JSON.stringify(updatedUser));

    // Update users array
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map(u =>
      u.email === updatedUser.email ? updatedUser : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Biodata berhasil disimpan!");
    navigate("/profile");
  };

  const handleBack = () => {
    navigate("/profile");
  };

  return (
    <div className="profile-container">
      <h2>Edit Profil</h2>

      <div className="biodata-form">
        <label>
          <strong>Username:</strong>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          <strong>Tanggal Lahir:</strong>
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </label>

        <label>
          <strong>Hafalan Juz:</strong>
          <input
            type="number"
            value={juz}
            onChange={(e) => setJuz(e.target.value)}
          />
        </label>

        <label>
          <strong>Kota:</strong>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>

        <div className="button-group">
          <button type="button" onClick={handleBack}>Kembali</button>
          <button type="button" onClick={handleSave}>Simpan</button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;