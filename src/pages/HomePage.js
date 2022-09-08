import React from "react";

//////svg //////
import shopping_logo from "../assets/online-shopping.svg";
//////

//menutoggle
import { AiOutlineMenu } from "react-icons/ai";

///

import { BsSearch, BsGrid3X2, BsCardList } from "react-icons/bs";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";

//////////
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

//////////////////

const HomePage = () => {
  return (
    <div className="homeContainer">
      <nav className="navbar">
        <h3 className="heading-3">Home</h3>
        <ul className="nav-menu">
          <li className="nav-menu__item">
            <a href={"1"} className="nav-menu__link">
              Fashion for ladies
            </a>
          </li>
          <li className="nav-menu__item">
            <a href={"1"} className="nav-menu__link">
              Fashion for ladies
            </a>
          </li>
          <li className="nav-menu__item">
            <a href={"1"} className="nav-menu__link">
              Fashion for ladies
            </a>
          </li>
          <li className="nav-menu__item">
            <a href={"1"} className="nav-menu__link">
              Fashion for ladies
            </a>
          </li>
          <li className="nav-menu__item">
            <a href={"1"} className="nav-menu__link">
              Fashion for ladies
            </a>
          </li>
          <li className="nav-menu__item">
            <a href={"1"} className="nav-menu__link">
              Fashion for ladies
            </a>
          </li>
          <li className="nav-menu__item">
            <a href={"1"} className="nav-menu__link">
              Fashion for ladies
            </a>
          </li>
          <li className="nav-menu__item">
            <a href={"1"} className="nav-menu__link">
              Fashion for ladies
            </a>
          </li>
          <li className="nav-menu__item">
            <a href={"1"} className="nav-menu__link">
              Fashion for ladies
            </a>
          </li>
          <li className="nav-menu__item">
            <a href={"1"} className="nav-menu__link">
              Fashion for ladies
            </a>
          </li>
          <li className="nav-menu__item">
            <a href={"1"} className="nav-menu__link">
              Fashion for ladies
            </a>
          </li>
          <li className="nav-menu__item">
            <a href={"1"} className="nav-menu__link">
              Fashion for ladies
            </a>
          </li>
          <li className="nav-menu__item">
            <a href={"1"} className="nav-menu__link">
              Fashion for ladies
            </a>
          </li>
          <li className="nav-menu__item">
            <a href={"1"} className="nav-menu__link">
              Fashion for ladies
            </a>
          </li>
          <li className="nav-menu__item">
            <a href={"1"} className="nav-menu__link">
              Fashion for ladies
            </a>
          </li>
        </ul>
      </nav>

      <header className="header">
        <button className="logo">MrJohny</button>

        <form className="search">
          <input type="text" className="search__input" placeholder="Search" />
          <button className="search__btn">
            <BsSearch />
          </button>
        </form>

        <nav className="nav">
          <button>Checkout</button>

          <div className="nav__cart-box">
            <button className="nav__cart-text">Cart</button>
            <button className="nav__cart-icon">
              <FaShoppingCart />
            </button>
            <span>0</span>
          </div>

          <div>
            <button>Login</button>
            <button>
              <FaUserPlus />
            </button>
          </div>

          <button className="nav__hamburger">
            <AiOutlineMenu />
          </button>
        </nav>
      </header>

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

      <div className="select">
        <div className="select__view">
          <div className="select__gridview select__gridview--active">
            <BsGrid3X2 />
          </div>
          <div className="select__listview--active">
            <BsCardList />
          </div>
        </div>

        <div className="select__price-range">
          <div>0</div>
          <input
            type="range"
            class="fred1"
            min="0"
            max="100"
            name="radio"
          ></input>
        </div>

        <div className="select__price">
          <label for="sort_price">Sort by:</label>
          <select
            name="sort_price"
            id="sort_price"
            className="select__price-order"
          >
            <option value="price-lowest">Price (Lowest)</option>
            <option value="price-highest">Price (Highest)</option>
            <option value="name-a">Name (A-Z)</option>
            <option value="name-z">Name (Z - A)</option>
          </select>
        </div>
      </div>

      <section className="productsCategories">
        <div className="product">
          <h2 className="product__category">Top Sellers in PC for you</h2>
          <img
            src={"https://dummyjson.com/image/i/products/9/1.jpg"}
            alt="img2"
            className="product__photo"
          />
          <button className="product__link">Shop now</button>
        </div>

        <div className="product">
          <h2 className="product__category">Fashion for ladies</h2>
          <img
            src={"https://dummyjson.com/image/i/products/41/1.jpg"}
            alt="img2"
            className="product__photo"
          />
          <button className="product__link">Shop now</button>
        </div>

        <div className="product">
          <h2 className="product__category">Explore home Furniture</h2>
          <img
            src={"https://dummyjson.com/image/i/products/27/1.jpg"}
            alt="img2"
            className="product__photo"
          />
          <button className="product__link">Shop now</button>
        </div>

        <div className="product">
          <h2 className="product__category">Explore home Lightening</h2>
          <img
            src={"https://dummyjson.com/image/i/products/98/1.jpg"}
            alt="img2"
            className="product__photo"
          />
          <button className="product__link">Shop now</button>
        </div>

        <div className="product">
          <h2 className="product__category">Men watches</h2>
          <img
            src={"https://dummyjson.com/image/i/products/64/1.jpg"}
            alt="img2"
            className="product__photo"
          />
          <button className="product__link">Shop now</button>
        </div>

        <div className="product">
          <h2 className="product__category">Ladies watches</h2>
          <img
            src={"https://dummyjson.com/image/i/products/67/1.jpg"}
            alt="img2"
            className="product__photo"
          />
          <button className="product__link">Shop now</button>
        </div>

        <div className="product">
          <h2 className="product__category">Women jewellery</h2>
          <img
            src={"https://dummyjson.com/image/i/products/76/1.jpg"}
            alt="img2"
            className="product__photo"
          />
          <button className="product__link">Shop now</button>
        </div>

        <div className="product">
          <h2 className="product__category">Ladies bag</h2>
          <img
            src={"https://dummyjson.com/image/i/products/71/1.jpg"}
            alt="img2"
            className="product__photo"
          />
          <button className="product__link">Shop now</button>
        </div>

        <div className="product">
          <h2 className="product__category">Smartphone</h2>
          <img
            src={"https://dummyjson.com/image/i/products/2/2.jpg"}
            alt="img2"
            className="product__photo"
          />
          <button className="product__link">Shop now</button>
        </div>

        <div className="product">
          <h2 className="product__category">Men shirt</h2>
          <img
            src={"https://dummyjson.com/image/i/products/55/1.jpg"}
            alt="img2"
            className="product__photo"
          />
          <button className="product__link">Shop now</button>
        </div>

        <div className="product">
          <h2 className="product__category">Skincare</h2>
          <img
            src={"https://dummyjson.com/image/i/products/16/1.png"}
            alt="img2"
            className="product__photo"
          />
          <button className="product__link">Shop now</button>
        </div>

        <div className="product">
          <h2 className="product__category">Men shoes</h2>
          <img
            src={"https://dummyjson.com/image/i/products/56/1.jpg"}
            alt="img2"
            className="product__photo"
          />
          <button className="product__link">Shop now</button>
        </div>

        <div className="product">
          <h2 className="product__category">Fragrance</h2>
          <img
            src={"https://dummyjson.com/image/i/products/11/2.jpg"}
            alt="img2"
            className="product__photo"
          />
          <button className="product__link">Shop now</button>
        </div>

        <div className="product">
          <h2 className="product__category">Explore tops</h2>
          <img
            src={"https://dummyjson.com/image/i/products/36/1.jpg"}
            alt="img2"
            className="product__photo"
          />
          <button className="product__link">Shop now</button>
        </div>

        <div className="product">
          <h2 className="product__category">Ladies footwear</h2>
          <img
            src={"https://dummyjson.com/image/i/products/49/1.jpg"}
            alt="img2"
            className="product__photo"
          />
          <button className="product__link">Shop now</button>
        </div>
      </section>

      <footer className="footer">
        <h5 className="copyright">
          &copy; 2022. Designed and Built by <span>Osifo John</span>
        </h5>
      </footer>
    </div>
  );
};

export default HomePage;
