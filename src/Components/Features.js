import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import FeaturesData from './FeaturesData';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Features = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div id='services' className='col-12 col-md-11 mx-auto border-top border-black pt-4'>
          <div>
            <h5 className='textRed font-weight-normal mb-0'>Features</h5>
            <h1 className='font-weight-bold text-white'>What I Do</h1>
          </div>
          <div className='col-12 my-4'>
            <Carousel
              infinite={true}
              responsive={responsive}
              showDots={true}
              autoPlay={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {
                FeaturesData.map((data) => (
                  <div key={data.id} onClick={()=>window.location.href=data.link} className='cart mx-auto bgColor px-4 py-3'>
                    <span className='textRed mb-2 icons'><data.icon /></span>
                    <h3 className='text-white text22'>{data.title}</h3>
                    <p className='text-white text15 mt-3'>{data.description}</p>
                    <FaArrowRightLong className='textRed text22 arrow' />
                  </div>
                ))
              }
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;
