import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import IntroVideo from "../../../../vie_gatsby/public/video/intro-video.mp4";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import removeSlashFromPagination from "common/removeSlashpagination";
import fadeWhenScroll from "common/fadeWhenScroll";

SwiperCore.use([Navigation, Pagination, Parallax]);

const IntroWithSlider = ({ sliderRef }) => {
  const [load, setLoad] = React.useState(true);
  const vidRef = useRef(null);
  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
    setTimeout(() => {
      removeSlashFromPagination();
      setLoad(false);
      vidRef.current.play();
    }, 1000);
  }, []);

  return (
    <header
      ref={sliderRef}
      className="slider slider-prlx fixed-slider text-center"
    >
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper parallax={true} className="swiper-wrapper" slidesPerView={1}>
            <SwiperSlide className="swiper-slide">
              <div
                className="bg-img valign"
                style={{ backgroundColor: "black" }}
                data-overlay-dark="6"
              >
                <video
                  ref={vidRef}
                  autoplay
                  muted={true}
                  loop
                  style={{ position: "absolute", width: "100%" }}
                >
                  <source src={IntroVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                      <div className="caption center mt-30">
                        <h1 className="color-font">Baxter Hill</h1>
                        <p>Message me for a loan</p>
                        <Link to="/about" className="butn bord curve mt-30">
                          <span>Contact now</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        ) : null}

        <div className="social-icon">
          <a href="#0">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#0">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#0">
            <i className="fab fa-behance"></i>
          </a>
          <a href="#0">
            <i className="fab fa-pinterest-p"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default IntroWithSlider;
