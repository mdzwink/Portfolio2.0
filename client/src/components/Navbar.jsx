import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
  const { handleContactPopoutToggle } = props;

  const scrollToTop = () => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
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
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;