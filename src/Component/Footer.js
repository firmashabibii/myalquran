import React from 'react';
import '../Css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Membaca Al-Qur'an. All rights reserved.</p>
        <p>
          <em>
            "Sesungguhnya Al-Qur'an ini memberikan petunjuk kepada jalan yang lebih lurus dan memberi kabar gembira
            kepada orang-orang mukmin." (QS. Al-Isra: 9)
          </em>
        </p>
        <p>
          Dibuat dengan ❤️ oleh Tim Pengembang Qur'an App.  
          <br />
          <a href="https://wa.me/6289518476014">Whatsapp</a> | 
          <a href="https://www.instagram.com/frmshbi/" target="_blank" rel="noreferrer"> Instagram</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
