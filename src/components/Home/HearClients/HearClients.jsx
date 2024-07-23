import React from "react";
import quote from "../../../assets/quote.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./HearClient.css";
import hear_client_background from '../../../assets/hear_client_background.png'

const HearClients = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  const slider = React.useRef(null);
  return (
    <div className="hearclient-container">
        <img className="hear_client_background" src={hear_client_background} alt="" />
      <div className="hear-client-wrapper">
        <h1 className="hear-heading">Hear from our Clients!</h1>

        <div className="main-hear">
          <img src={quote} alt="" />

          <div className="text-arrow custom-slick-slider">
            <Slider ref={slider} {...settings}>
              <div className="review-p">
                <p>
                  “The staff at this location is amazing! The providers are
                  great, easy to schedule with and extremely accommodating! They
                  are so helpful in trying to make sure all of your needs are
                  met and everything goes smoothly in addition to being so
                  responsive and supportive. I also have to mention how great
                  the women who answer the phones are! Everyone I’ve interacted
                  with at this practice has been so kind and helpful. I highly,
                  highly recommend!!”
                </p>
              </div>
              <div className="review-p">
                <p>
                  "This place is really great. I have been with the same
                  practitioner for years now and when she started at this
                  practice I was really impressed by their efficiency. Highly
                  recommend. If you get to see Bethany, she is a fantastic
                  practitioner and really knows her stuff. Couldn’t recommend
                  her more"
                </p>
              </div>
              <div className="review-p">
                <p>
                  "I was so very happy to get connected to my provider through
                  their team. I consider myself lucky that I am receiving the
                  right care and attention. Their admin is also very
                  professional and thorough."
                </p>
              </div>
              <div className="review-p">
                <p>
                  "I am currently working with Danielle Overton and she is very
                  professional, kind, compassionate and is a great listener. She
                  has helped me a lot during this tough time in my life. I would
                  highly recommend Ms. Overton and Orenda Psychiatry! They have
                  helped me tremendously!"
                </p>
              </div>
              <div className="review-p">
                <p>
                  "Shelley is an incredible psychiatrist who has had a
                  profoundly positive impact on my life. From our very first
                  session I felt understood and supported in ways I hadn't
                  experienced before. She was able to refine my diagnosis so my
                  treatment plan could be more tailored to my specific needs,
                  and she uncovered another diagnosis that had been missed by
                  countless previous doctors. Shelley’s empathetic in her
                  approach, listens attentively, and offers invaluable
                  insights."
                </p>
              </div>
            </Slider>

            <hr Class="mt-6 w-full" />

            <div className="individual-arrow mt-6">
              <div className="individual">
                <div className="individual-circle">
                  <h3>VE</h3>
                </div>
                <h3 className="individual-name">Vanessa E.</h3>
              </div>

              <div className="arrow">
                <button onClick={() => slider?.current?.slickPrev()}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    class="cursor-pointer"
                    >
                    <path
                        d="M31.6667 20H9.99999M18.3333 10L9.51184 18.8215C8.86096 19.4724 8.86096 20.5276 9.51184 21.1785L18.3333 30"
                        stroke="#2E0086"
                        stroke-width="3"
                        stroke-linecap="round"
                    />
                    </svg>
                </button>
                
                <button onClick={() => slider?.current?.slickNext()}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    class="cursor-pointer"
                    >
                    <path
                        d="M8.33398 20H30.0007M21.6673 10L30.4888 18.8215C31.1397 19.4724 31.1397 20.5276 30.4888 21.1785L21.6673 30"
                        stroke="#2E0086"
                        stroke-width="3"
                        stroke-linecap="round"
                    />
                    </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HearClients;