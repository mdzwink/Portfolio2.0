import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import GetAQuote from './components/GetAQuote';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <GetAQuote />
      <Footer />
    </div>
  );
}

export default App;
