import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import '../Css/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user_login")));
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user_login");
    setUser(null);
    navigate("/login");
    window.location.reload();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user_login"));
    setUser(storedUser);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="logo-container">
        <img 
          src="/alquran.png"
          alt="Logo Quran"
          className="logo-img"
        />
        <h1>Qur'an</h1>
      </div>

      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? '✖' : '☰'}
      </button>

      {user && (
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <div className="menu-center">
            <Link to="/beranda" onClick={toggleMenu}><strong>Membaca</strong></Link>
            <Link to="/audio" onClick={toggleMenu}><strong>Audio</strong></Link>
            <Link to="/profile" onClick={toggleMenu}><strong>Profile</strong></Link>
            <Link to="/doa" onClick={toggleMenu}><strong>Doa-Doa</strong></Link>
          </div>
          <div className="menu-right">
            <button onClick={handleLogout} className="logout-button" title="Logout">
              <LogOut size={24} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
