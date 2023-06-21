import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import AddMediaForm from './AddMediaForm';
import './Admin.css';
import Carousel from '../FuncComp/Carousel';

const Admin = (props) => {
  const { imgs, setImgs } = useOutletContext();

  //Move all of the following to the Admin component plus the button below. Will probably need img array preview in admin as well.
  const newimg = 'https://source.unsplash.com/1920x1080?charcoal'; // for TESTING 
  const handleAddImgClick = (img) => { // for TESTING 
    setImgs(prev => [img, ...prev])
    //add img to backend/db resource as well for persistance
    axios.post('/test', { img })
    .then(res=> console.log('res',res))
    .catch(err=> console.log('ERROR:', err))
  }

  return (
    <>
      <h1 className='admin-banner'>Admin page</h1>
      <button onClick={() => handleAddImgClick(newimg)} >Add Img Test</button> {/* for TESTING */}
      <div className="form">
        <AddMediaForm />
      </div>
    </>
  )
}

export default Admin;