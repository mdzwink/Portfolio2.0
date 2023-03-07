import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import './BeforeAfter.css';

const BeforeAfter = () => {

const FIRST_IMAGE = {
  imageUrl: 'https://static.wixstatic.com/media/9b49a6_b728916de416467aa1d74c83d6e666ce~mv2.jpg/v1/fill/w_750,h_388,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/custom-closet-after-500px_edited.jpg'
};
const SECOND_IMAGE = {
  imageUrl: 'https://static.wixstatic.com/media/9b49a6_575434abc22247c69d3b39f9225abae3~mv2.jpg/v1/fill/w_750,h_388,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/custom-closet-before-500px_edited.jpg'
};

  return (
    <div className="before-after-container">
      <ReactBeforeSliderComponent
        firstImage={FIRST_IMAGE}
        secondImage={SECOND_IMAGE}
      />
    </div>
  )
}

export default BeforeAfter;