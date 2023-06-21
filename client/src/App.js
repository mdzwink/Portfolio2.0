import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import { useState } from 'react';


function App() {
  const [contactPopout, setContactPopout] = useState(false);
  
  
  const handleContactPopoutToggle = (e) => {
    e.preventDefault()
    contactPopout ? setContactPopout(false) : setContactPopout(true);
  }

  return (
    <div className="App">
      <Navbar handleContactPopoutToggle={(e) => handleContactPopoutToggle(e)} />
      <div className={contactPopout ? "background-fade active" : "background-fade"} onClick={(e) => handleContactPopoutToggle(e)}>

      <div className={contactPopout ? "contact-popout active" : "contact-popout"} >
        <ContactForm setContactPopout={setContactPopout} />
      </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
