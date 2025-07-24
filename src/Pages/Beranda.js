import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import '../Css/Beranda.css';

function Beranda() {
  const [surahList, setSurahList] = useState([]);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const navigate = useNavigate();

  const alThiwal = ['Al-Baqarah', 'Ali Imran', 'An-Nisa', "Al-A'raf", 'Al-Anam', 'Al-Maidah', 'Yunus'];

  useEffect(() => {
    fetch('http://api.alquran.cloud/v1/surah')
      .then(res => res.json())
      .then(data => setSurahList(data.data))
      .catch(err => console.error(err));
  }, []);

  const handleSurahClick = (id) => {
    navigate(`/surah/${id}`);
  };

  const filteredSurah = surahList
    .filter(s => {
      const searchMatch = s.englishName.toLowerCase().includes(search.toLowerCase()) || s.name.includes(search);

      const typeMatch = filterType === 'all' || s.revelationType === filterType;

      let categoryMatch = true;
      if (filterCategory === 'thiwal') {
        categoryMatch = alThiwal.includes(s.englishName);
      } else if (filterCategory === 'miun') {
        categoryMatch = s.numberOfAyahs > 100;
      } else if (filterCategory === 'mathani') {
        categoryMatch = s.numberOfAyahs < 100;
      } else if (filterCategory === 'mufashshal') {
        categoryMatch = s.number >= 50;
      }

      return searchMatch && typeMatch && categoryMatch;
    });

  return (
  <motion.div
    className="beranda-container"
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -30, scale: 0.95 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
      <h2>Daftar Surah</h2>

      <p className="beranda-subtitle">
      Let's read the Quran, so that life will be more useful
      </p>

      <div className="filter-container">
        <input
          type="text"
          className="search-input"
          placeholder="Cari surah..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="all">Semua</option>
          <option value="Meccan">Makkiyah</option>
          <option value="Medinan">Madaniyah</option>
        </select>

        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="all">Semua Kategori</option>
          <option value="thiwal">Al-Thiwal (7 surah panjang)</option>
          <option value="miun">Al-Mi'un (&gt;100 ayat)</option>
          <option value="mathani">Al-Mathani (&lt;100 ayat)</option>
          <option value="mufashshal">Al-Mufashshal (Qaf - An-Nas)</option>
        </select>
      </div>

      <ul className="surah-list">
        {filteredSurah.map(surah => (
          <li key={surah.number}>
            <button onClick={() => handleSurahClick(surah.number)}>
              {surah.number}. {surah.englishName} <br />
              <small>{surah.revelationType} | {surah.numberOfAyahs} ayat</small>
            </button>
          </li>
        ))}
      </ul>
      </motion.div>
  );
}

export default Beranda;
