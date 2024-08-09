import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import ProviderCardSmall from '../../OurTeam/ProviderCardSmall';
import Loading from '../../OurTeam/Loading';
import { useProviders } from '../../../services/queries';
import Error from '../../OurTeam/Error';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ModalProviders.css'

const ModalProviders = () => {
  const providers = useProviders();
  const [providersData, setProvidersData] = useState(providers.data);

  useEffect(() => {
    if (!providersData) {
      setProvidersData(providers.data);
    }
  }, [providers.data]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
   
    responsive: [
      {
        breakpoint: 773,
        mobileFirst:true,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
          
        }
      },
      {
        breakpoint: 491,
        mobileFirst:true,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };
  
   

  return (
    <>
      {providers.isLoading ? (
        <Loading data={'Providers'} />
      ) : providers.isError ? (
        <Error />
      ) : (
        <div className="py-4 custom-slick-slider-assessment">
          <Slider {...settings} >
            {providersData?.map((provider, i) => (
              <div
                key={i}
                style={{
                  width: '275px',
                  height: '24rem'
                }}
                className='pop'
              >
                <ProviderCardSmall
                  provider={provider}
                  setProvidersData={setProvidersData}
                  assessment={true}
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default ModalProviders;
