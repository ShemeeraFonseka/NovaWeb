import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import BodyCanvasAnimation from './components/BodyCanvasAnimation/BodyCanvasAnimation';
import About from './components/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/pages/AboutUs/AboutUs';
import Team from './components/Team/Team';

function App() {
  return (
    <Router basename="/NovaWeb">
      <div className="App">
        <BodyCanvasAnimation />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Team/>
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
