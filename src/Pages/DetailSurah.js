import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../Css/DetailSurah.css';

function DetailSurah() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [arabAyat, setArabAyat] = useState([]);
  const [transAyat, setTransAyat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("id.indonesian");

  useEffect(() => {
    const fetchAyat = async () => {
      setLoading(true);
      try {
        const resArab = await fetch(`https://api.alquran.cloud/v1/surah/${id}/ar.alafasy`);
        const dataArab = await resArab.json();

        let dataTrans = null;
        if (language !== "ar.alafasy") {
          const resTrans = await fetch(`https://api.alquran.cloud/v1/surah/${id}/${language}`);
          dataTrans = await resTrans.json();
        }

        if (dataArab.code === 200) {
          setArabAyat(dataArab.data.ayahs);
        } else {
          console.error("Gagal mengambil data arab:", dataArab);
        }

        if (dataTrans && dataTrans.code === 200) {
          setTransAyat(dataTrans.data.ayahs);
        } else {
          setTransAyat([]);
        }
      } catch (error) {
        console.error("Error:", error);
      }
      setLoading(false);
    };

    fetchAyat();
  }, [id, language]);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleBack = () => {
    navigate('/beranda');
  };

  return (
    <motion.div
      className="detail-container"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <button className="back-button" onClick={handleBack}>⬅ Kembali</button>

      <h2>Detail Surah {id}</h2>

      <div className="filter-container">
        <label htmlFor="language-select">Pilih Bahasa: </label>
        <select id="language-select" value={language} onChange={handleLanguageChange}>
          <option value="id.indonesian">Indonesia</option>
          <option value="en.asad">English</option>
          <option value="ar.alafasy">Arab</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="ayat-list">
          {arabAyat.map((ayat, index) => (
            <li key={ayat.number} className={ayat.numberInSurah === 1 ? "bismillah" : ""}>
              <p><strong>Ayat {ayat.numberInSurah}:</strong></p>
              <p className="arab-text">{ayat.text}</p>
              {language !== "ar.alafasy" && (
                <p className="translation-text">{transAyat[index] ? transAyat[index].text : "Terjemahan tidak tersedia"}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default DetailSurah;
