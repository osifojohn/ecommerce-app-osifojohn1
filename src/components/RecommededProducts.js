import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

export const RecommededProducts = () => {
  return (
    <section className="recommended-products">
      <Swiper
        slidesPerView={2}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={false}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <figure>
            <img
              src={"https://dummyjson.com/image/i/products/64/1.jpg"}
              alt="jjj"
            />
          </figure>
          <div>
            <h3>SAMSUNG GALAXY BOOK</h3>
            <p>$152858</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img
              src={"https://dummyjson.com/image/i/products/36/1.jpg"}
              alt="jjj"
            />
          </figure>
          <div>
            <h3>SAMSUNG GALAXY BOOK</h3>
            <p>$152858</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img
              src={"https://dummyjson.com/image/i/products/9/1.jpg"}
              alt="jjj"
            />
          </figure>
          <div>
            <h3>SAMSUNG GALAXY BOOK</h3>
            <p>$152858</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default RecommededProducts;
