import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../Css/Doa.css';

function Doa() {
  const [doaList, setDoaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const dummyDoa = [
      {
        id: 1,
        judul: "Doa Sebelum Makan",
        arab: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
        latin: "Allahumma barik lana fima razaqtana wa qina 'azabannar",
        arti: "Ya Allah, berkahilah kami pada rezeki yang Engkau berikan dan peliharalah kami dari siksa api neraka"
      },
      {
        id: 2,
        judul: "Doa Setelah Makan",
        arab: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِينَ",
        latin: "Alhamdulillahil ladzi at'amana wasaqana waja'alana minal muslimin",
        arti: "Segala puji bagi Allah yang telah memberi kami makan dan minum serta menjadikan kami termasuk orang muslim"
      },
      {
        id: 3,
        judul: "Doa Masuk Rumah",
        arab: "بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
        latin: "Bismillahi walajna wa bismillahi kharajna wa ‘ala rabbina tawakkalna",
        arti: "Dengan nama Allah kami masuk dan dengan nama Allah kami keluar, dan kepada Tuhan kami berserah diri"
      },
      {
        id: 4,
        judul: "Doa Keluar Rumah",
        arab: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
        latin: "Bismillahi tawakkaltu 'alallah, wa la haula wa la quwwata illa billah",
        arti: "Dengan nama Allah, aku bertawakal kepada Allah, tidak ada daya dan kekuatan melainkan dengan pertolongan Allah"
      },
      {
        id: 5,
        judul: "Doa Masuk Kamar Mandi",
        arab: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
        latin: "Allahumma inni a'udzu bika minal khubutsi wal khaba'its",
        arti: "Ya Allah, aku berlindung kepada-Mu dari setan laki-laki dan setan perempuan"
      },
      {
        id: 6,
        judul: "Doa Keluar Kamar Mandi",
        arab: "غُفْرَانَكَ",
        latin: "Ghufranak",
        arti: "Aku memohon ampunan-Mu"
      },
      {
        id: 7,
        judul: "Doa Bangun Tidur",
        arab: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
        latin: "Alhamdulillahil ladzi ahyana ba'da ma amatana wa ilaihin nushur",
        arti: "Segala puji bagi Allah yang telah menghidupkan kami setelah mematikan kami dan kepada-Nya kami dibangkitkan"
      },
      {
        id: 8,
        judul: "Doa Sebelum Tidur",
        arab: "بِاسْمِكَ اللَّهُمَّ أَحْيَا وَأَمُوتُ",
        latin: "Bismikallahumma ahya wa amut",
        arti: "Dengan nama-Mu ya Allah aku hidup dan aku mati"
      },
      {
        id: 9,
        judul: "Doa Memohon Ilmu yang Bermanfaat",
        arab: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
        latin: "Allahumma inni as'aluka 'ilman nafi'an, wa rizqan tayyiban, wa 'amalan mutaqabbalan",
        arti: "Ya Allah, aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang baik, dan amal yang diterima"
      },
      {
        id: 10,
        judul: "Doa Mendapatkan Kebaikan Dunia Akhirat",
        arab: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةًۭ وَفِي ٱلْـَٔاخِرَةِ حَسَنَةًۭ وَقِنَا عَذَابَ ٱلنَّارِ",
        latin: "Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah wa qina 'azabannar",
        arti: "Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan peliharalah kami dari siksa neraka"
      }
    ];

    setDoaList(dummyDoa);
    setLoading(false);
  }, []);

  const filteredDoa = doaList.filter(doa =>
    doa.judul.toLowerCase().includes(search.toLowerCase()) ||
    doa.latin.toLowerCase().includes(search.toLowerCase()) ||
    doa.arti.toLowerCase().includes(search.toLowerCase())
  );

  return (
<motion.div
    className="doa-container"
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -30, scale: 0.95 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
      <h2>Kumpulan Doa Harian</h2>

      <input
        type="text"
        className="search-input"
        placeholder="Cari doa..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="doa-list">
          {filteredDoa.length > 0 ? (
            filteredDoa.map(doa => (
              <li key={doa.id} className="doa-card">
                <h3>{doa.judul}</h3>
                <p className="arab-text">{doa.arab}</p>
                <p className="latin-text"><em>{doa.latin}</em></p>
                <p className="arti-text">{doa.arti}</p>
              </li>
            ))
          ) : (
            <p>Tidak ada doa yang ditemukan.</p>
          )}
        </ul>
      )}
    </motion.div>
  );
}

export default Doa;
