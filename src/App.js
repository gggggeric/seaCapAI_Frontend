import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactUs from './Components/Contact/ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ContactUs/>} /> 
            <Route path="/contactUs" element={<ContactUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
//Palitan ng Home yung "/" BINGGOOOOOT
export default App;