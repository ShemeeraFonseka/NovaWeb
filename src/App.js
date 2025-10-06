import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import BodyCanvasAnimation from './components/BodyCanvasAnimation/BodyCanvasAnimation';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <BodyCanvasAnimation/><Navbar/><Home/><About/>
    </div>
  );
}

export default App;
