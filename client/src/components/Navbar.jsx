import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm';

const Navbar = () => {
  const [contactPopout, setContactPopout] = useState(false);
  
  const scrollToTop = () => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  const handleContactPopoutToggle = (e) => {
    e.preventDefault()
    contactPopout ? setContactPopout(false) : setContactPopout(true);
  }

  return (
    <header>
      <nav>
        <ul>
          <li><Link to={'#'} className='link'>My Work <FontAwesomeIcon icon={faAngleDown} /></Link>
            <ul>
              <li className='link link-closet'><Link to={'/web-work'} ><div className='wb'>Web</div></Link></li>
              <li className='link link-office'><Link to={'/imagery-work'} ><div>Imagery</div></Link></li>
            </ul>
          </li>
          <li className='link link-contact' onClick={(e) => handleContactPopoutToggle(e)}>Work with me <FontAwesomeIcon icon={faAngleDown} /></li>
          <div className={contactPopout ? "contact-popout active" : "contact-popout"} >
            <ContactForm setContactPopout={setContactPopout} />
          </div>
        </ul>
      </nav>
      <div className={contactPopout ? "background-fade active" : "background-fade"} onClick={(e) => handleContactPopoutToggle(e)}></div>
    </header>
  )
}

export default Navbar;