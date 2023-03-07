import React, { useState } from 'react';
import './Carousel.css'

const Carousel = (props) => {

  const { imgArr, h, w, secondary } = props;

  const [currentImgI, setCurrentImgI] = useState(0);

  const [secondaryToggle, setSecondaryToggle] = useState(secondary);

  const handleNextImg = () => {
    setCurrentImgI(currentImgI === imgArr.length - 1 ? 0 : currentImgI + 1)
    console.log('currentIndex', currentImgI)
  }

  const handlePrevImg = () => {
    setCurrentImgI(currentImgI === 0 ? imgArr.length - 1 : currentImgI - 1)
    console.log('currentIndex', currentImgI)
  }

  const toggleSecondCarousel = () => {
    secondaryToggle ? setSecondaryToggle(false) : setSecondaryToggle(true);
  }

  const height = `${h}vh`
  const width = `${w}vw`

  return (
    <>
    <div className="carousel-container" style={{height: height, width: width}}>
      <div className="primary-carousel">
        <div className="carousel-button prev" onClick={handlePrevImg}>{'<'}</div>
        <div className="carousel-button next" onClick={handleNextImg}>{'>'}</div>
        <ul>
          {imgArr.map((img, index) => {
            return <li key={index} className={index === currentImgI ? 'primary-slide active' : 'primary-slide'}>
                <img src={img} alt='closet' />
              </li>
              })
          }
        </ul>
      </div>
      <div className={secondaryToggle? "secondary-carousel secondary-active" : "secondary-carousel"}>
        <ul>
        {imgArr.map((img, index) => {
          return <li className={index === currentImgI ? 'secondary-slide secondary-active' : 'secondary-slide'}>
                <img src={img} alt='closet' onClick={() => setCurrentImgI(index)}/>
              </li>
              })
            }
        </ul>
      </div>
    <div className="collaps-secondary-carousel" onClick={() => toggleSecondCarousel()}>{secondaryToggle ? 'x' : '+ expand carousel'}</div>
    </div>
    </>
  )
}

export default Carousel;