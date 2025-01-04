import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Mainproduct from './Components/Mainproduct/Mainproduct';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Mainproduct />
      <Footer />
    </div>
  );
}

export default App;
