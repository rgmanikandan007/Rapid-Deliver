import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Mainproduct from './Components/Mainproduct/Mainproduct';
import Navbar from './Components/Navbar/Navbar';
import Vegfruits from './Components/VegFruits/Vegfruits';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<><Banner /><Mainproduct /></>} />
          <Route path="/vegfruits" element={<Vegfruits />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
