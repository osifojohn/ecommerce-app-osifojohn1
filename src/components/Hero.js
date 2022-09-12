import React from "react";

import shopping_logo from "../assets/online-shopping.svg";

//////////
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

//////////////////

const Hero = () => {
  return (
    <div className="hero">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h3 className="hero__text">
            We deliver to over 150 <br />
            regions and countries
          </h3>
          <figure className="hero__fig">
            <img src={shopping_logo} alt="img1" className="hero__photo" />
          </figure>
        </SwiperSlide>

        <SwiperSlide>
          <h3 className="hero__text">
            We deliver to over 150 <br />
            regions and countries
          </h3>
          <figure className="hero__fig">
            <img
              src="https://dummyjson.com/image/i/products/41/1.jpg"
              alt="img1"
              className="hero__photo"
            />
          </figure>
        </SwiperSlide>

        <SwiperSlide>
          <h3 className="hero__text">
            Lorem, ipsum dolor
            <br /> sit amet consectetur
          </h3>
          <figure className="hero__fig">
            <img
              src={"https://dummyjson.com/image/i/products/2/2.jpg"}
              alt="img1"
              className="hero__photo"
            />
          </figure>
        </SwiperSlide>

        <SwiperSlide>
          <h3 className="hero__text">
            Lorem, ipsum dolor
            <br /> sit amet consectetur
          </h3>
          <figure className="hero__fig">
            <img
              src={"https://dummyjson.com/image/i/products/98/1.jpg"}
              alt="img1"
              className="hero__photo"
            />
          </figure>
        </SwiperSlide>

        <SwiperSlide>
          <h3 className="hero__text">
            Lorem, ipsum dolor
            <br /> sit amet consectetur
          </h3>
          <figure className="hero__fig">
            <img
              src={"https://dummyjson.com/image/i/products/9/1.jpg"}
              alt="img1"
              className="hero__photo"
            />
          </figure>
        </SwiperSlide>

        <SwiperSlide>
          <h3 className="hero__text">
            Lorem, ipsum dolor
            <br /> sit amet consectetur
          </h3>
          <figure className="hero__fig">
            <img
              src={"https://dummyjson.com/image/i/products/27/1.jpg"}
              alt="img1"
              className="hero__photo"
            />
          </figure>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
