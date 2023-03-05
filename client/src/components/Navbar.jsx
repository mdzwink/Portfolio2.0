import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
        <Link to={'/'}><div className='navbar-logo' onClick={() => scrollToTop()}></div></Link>
      <nav>
      <ul>
          <li onClick={() => scrollToTop()} ><Link to={'/'} className='link'>Home</Link></li>
          <li><Link to={'/about'} className='link'>About Us</Link></li>
          <li><Link to={'/spaces'} className='link'>Spaces +</Link>
            <ul>
              <li className='link link-closet'><Link to={'/spaces/closet'} ><div className='wb'>closet</div></Link></li>
              <li className='link link-office'><Link to={'/spaces/office'} ><div>office</div></Link></li>
              <li className='link link-garage'><Link to={'/spaces/garage'} ><div>garage</div></Link></li>
              <li className='link link-pantrie'><Link to={'/spaces/pantrie'} ><div>pantrie</div></Link></li>
              <li className='link link-garage-floor'><Link to={'/spaces/garage-floor'} ><div>garage floor</div></Link></li>
            </ul>
          </li>
          <li><Link to={'process'} className='link'>Process</Link></li>
          <li><Link to={'blog'} className='link'>Blog</Link></li>
          <li className='link link-contact'>
            <a className='link' onClick={(e) => handleContactPopoutToggle(e)}>
              Contact Us + 
            </a>
            <div className={contactPopout ? "contact-popout active" : "contact-popout"} >
              <h1>Contact us</h1>
              <h3>Call us at <em>647-856-4646</em> <br></br> or book an appointment below</h3>
              <form action="#" className="contact-form">
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='email/phone-number'/>
                <p>'What space are you upgrading?'</p>
                <input type="checkbox" id='closet' name='closet' value={'closet'} />
                <label htmlFor="closet">'Closet, Pantry or Office'</label>
                <input type="checkbox" id='garage' name='garage' value={'garage'}/>
                <label htmlFor="garage">'Garage'</label>
                <input type="checkbox" name='other' value={'other'}/>
                <label htmlFor="other">'Other Space'</label>
                <button>Submit</button>
              </form>
            </div>
          </li>
          <li className="link">
            <div className="social-nav-container">
              <a href='https://www.facebook.com/ElegantClosets.ca/' target='_blank' className='social-nav-fb'><FontAwesomeIcon icon={faFacebook} /></a>
              <a href='https://www.pinterest.ca/elegantcustom/' target='_blank' className='social-nav-pi'><FontAwesomeIcon icon={faPinterest} /></a>
              <a href='https://www.instagram.com/elegantclosets.ca/' target='_blank' className='social-nav-in'><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </li>
        </ul>
      </nav>
      <div className={contactPopout ? "background-fade active" : "background-fade"} onClick={(e) => handleContactPopoutToggle(e)}></div>
    </header>
  )
}

export default Navbar;