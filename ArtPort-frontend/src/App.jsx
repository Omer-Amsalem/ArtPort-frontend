import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './library/loginPage/SignIn';
import SignUp from './library/loginPage/SignUp';
import MainPage from './library/mainPage/main/MainPage';
import UserGallery from './library/mainPage/userGallery/UserGallery';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/sing-nup" element={<SignUp />} />
        <Route path="/user-gallery" element={<UserGallery />} /> 
      </Routes>
    </Router>
  );
}

export default App;
