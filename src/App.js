import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactUs from './Components/Contact/ContactUs';
import FAQ from './Components/Contact/FAQ';
import About from './pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <main className="main-content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<ContactUs/>} /> 
            <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/FAQ" element={<FAQ />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
//Palitan ng Home yung "/" BINGGOOOOOT
export default App;