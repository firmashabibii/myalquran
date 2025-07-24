import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../Css/Audio.css';

function Audio() {
  const [surahList, setSurahList] = useState([]);
  const [search, setSearch] = useState('');
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user_login")));

  useEffect(() => {
    fetch('https://api.alquran.cloud/v1/surah')
      .then(res => res.json())
      .then(data => setSurahList(data.data))
      .catch(err => console.error(err));
  }, []);

  const handleSaveFavorite = (audioUrl) => {
    let updatedFavorites = user?.favorites ? [...user.favorites] : [];

    if (updatedFavorites.includes(audioUrl)) {
      
      updatedFavorites = updatedFavorites.filter(url => url !== audioUrl);
      alert("Audio dihapus dari favorit!");
    } else {

      updatedFavorites.push(audioUrl);
      alert("Audio disimpan ke favorit!");
    }

    const updatedUser = { ...user, favorites: updatedFavorites };
    localStorage.setItem("user_login", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const isFavorite = (audioUrl) => {
    return user?.favorites?.includes(audioUrl);
  };

  return (
    <motion.div
      className="audio-container"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2>Daftar Audio Surah</h2>

      <input className='search'
        type="text"
        placeholder="Cari surah..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="audio-grid">
        {surahList
          .filter(surah =>
            surah.englishName.toLowerCase().includes(search.toLowerCase()) ||
            surah.name.toLowerCase().includes(search.toLowerCase())
          )
          .map(surah => {
            const audioUrl = `https://cdn.islamic.network/quran/audio/64/ar.alafasy/${surah.number}.mp3`;
            return (
              <div key={surah.number} className="audio-card">
                <p>{surah.englishName}</p>
                <audio controls src={audioUrl}>
                  Browser kamu tidak mendukung audio tag.
                </audio>
                <button
                  onClick={() => handleSaveFavorite(audioUrl)}
                  className={isFavorite(audioUrl) ? "favorite" : ""}
                >
                  ⭐
                </button>
              </div>
            );
          })}
      </div>
    </motion.div>
  );
}

export default Audio;
