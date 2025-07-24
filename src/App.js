import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Login from './Component/Login';
import Register from './Component/Register';
import Profile from './Pages/Profile';
import EditProfile from './Pages/EditProfile';
import Beranda from './Pages/Beranda';
import Audio from './Pages/Audio';
import DetailSurah from './Pages/DetailSurah';
import Doa from './Pages/Doa';

function App() {
  const user = JSON.parse(localStorage.getItem("user_login"));

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/beranda" 
          element={user ? <Beranda /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/login" 
          element={!user ? <Login /> : <Navigate to="/beranda" />} 
        />
        <Route 
          path="/register" 
          element={!user ? <Register /> : <Navigate to="/beranda" />} 
        />
        <Route 
          path="/profile" 
          element={user ? <Profile /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/edit-profile" 
          element={user ? <EditProfile /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/surah/:id" 
          element={user ? <DetailSurah /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/audio" 
          element={user ? <Audio /> : <Navigate to="/login" />} 
        />

        <Route 
          path="*" 
          element={<Navigate to="/beranda" />} 
        />

        <Route 
          path="/doa" 
          element={user ? <Doa /> : <Navigate to="/login" />} 
        />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
