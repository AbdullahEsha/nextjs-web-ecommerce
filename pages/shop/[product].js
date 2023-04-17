import { useEffect, useState } from "react";
// import Footer from '../components/Footer'
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import Image from "next/image";
import { ProductData } from "../../components/ProductData";
import productimage1 from "../../images/productcount1.png";
import productimage2 from "../../images/productcount2.png";
import { HiPlus, HiMinus } from "react-icons/hi";
import { RiFontColor } from "react-icons/ri";
import cardImg1 from "../../images/homeCard1.png";
import cardImg2 from "../../images/homeCard2.png";
import cardImg3 from "../../images/homeCard3.png";
import number1 from "../../images/number-icon1.png";
import number2 from "../../images/number-icon2.png";
import number3 from "../../images/number-icon3.png";
import useWindowDimensions from "../../components/useWindowDimensions";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useGetProductsByNumberQuery } from "../../services/productApi";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { replaceHyphenWithWhitespace } from "../../components/Reuses/Reuse";

const Product = () => {
  const router = useRouter();
  const { product } = router.query;

  const Products = useSelector((state) => state?.products.allProducts) || {};
  const [singleProduct] = Products.data.filter(
    (el) => el.name === replaceHyphenWithWhitespace(product)
  );
  console.log(singleProduct.quantity);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Navbar />
      <div className="container home-top-margin">
        {singleProduct && (
          <div className="product-details">
            <div className="row-div border-product-detail">
              <div className="col-6 ">
                {/* <div className="product-background border-2 border-black">
                  <img
                    src={singleProduct.imageUrls[0]}
                    alt={singleProduct.name}
                  />
                </div> */}
                {/* Start */}
                <div className="product-background ">
                  <img
                    src={singleProduct.imageUrls[activeIndex]}
                    alt={singleProduct.name}
                    className="h-[70%]  w-[80%] mx-auto "
                  />
                  <div className="flex flex-wrap gap-[1rem]  justify-center items-center h-[30%]">
                    {singleProduct.imageUrls.map((url, index) => (
                      <div
                        key={index}
                        className={`w-1/4 p-2 cursor-pointer ${
                          activeIndex === index
                            ? "border-b-4 border-blue-500"
                            : ""
                        }`}
                        onClick={() => handleClick(index)}
                      >
                        <img
                          src={url}
                          alt={`${singleProduct.name} image ${index}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* end */}
              </div>
              <div className="col-6">
                <div className="product-details-content">
                  <div className="product-details-content-inside">
                    <h3>{singleProduct.name}</h3>
                    <h4>${singleProduct.price.$numberDecimal}</h4>
                    <h6>
                      Availablity: <span>In Stock</span>
                    </h6>
                    <h5>Color:</h5>
                    <div className="customize-image">
                      <div className="color-container">
                        <div className="product-details-color" id="color-first">
                          <input type="color" />
                        </div>
                        <div
                          className="product-details-color"
                          id="color-second"
                        >
                          <input type="color" value="#ffffff" />
                        </div>
                      </div>
                      <div className="upload-image-container">
                        <input type="file" />
                      </div>
                      <div className="text-container">
                        <RiFontColor size={22} /> <h6>Text</h6>
                      </div>
                      <div className="font-container">
                        <select>
                          <option value="Time to new roman">
                            Time to new roman
                          </option>
                          <option value="Arial">Arial</option>
                        </select>
                      </div>
                    </div>
                    <h5>Quantity:</h5>

                    <ActiveTab data={singleProduct} />
                  </div>
                </div>
              </div>
            </div>
            <ProductDesTab />
          </div>
        )}
        <HowItWorks />
        <SliderSec />
      </div>
      <Footer />
    </>
  );
};

export default Product;

const ActiveTab = ({ data }) => {
  const [activeTab, setActiveTab] = useState("single");

  const [quantity, setQuantity] = useState(5);

  const handleIncrement = () => {
    if (activeTab == "set" && data.quantity > quantity)
      setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1 && activeTab == "set") {
      setQuantity(quantity - 1);
    }
  };
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const qn = `${
      activeTab == "single" ? 1 : activeTab == "double" ? 2 : quantity
    }`;

    dispatch(
      cartActions.addItem({
        name: data.name,
        id: data._id,
        image: data.imageUrls[0],
        price: data.price.$numberDecimal,
        quantity: Number(qn),
      })
    );
  };

  const item = useSelector((state) => state.cart);
  const isInCard = item.cart.filter((el) => el.id == data._id);

  return (
    <>
      <div className="product-details-quantity">
        <div
          className={`product-quantity-card ${
            activeTab === "single" ? "active" : ""
          }`}
          onClick={() => setActiveTab("single")}
        >
          <label>1</label>
          <p>Single</p>
          <Image src={productimage1} alt="no_image" height={58} width={86} />
        </div>
        <div
          className={`product-quantity-card ${
            activeTab === "double" ? "active" : " "
          } ${data.quantity < 2 && "not-allowed"}`}
          onClick={() => {
            if (data.quantity > 1) setActiveTab("double");
          }}
        >
          <label>2</label>
          <p>Double</p>
          <Image src={productimage2} alt="no_image" height={58} width={86} />
        </div>
        <div
          className={`product-quantity-card ${
            activeTab === "set" ? "active" : ""
          } ${data.quantity < 6 && "not-allowed"}`}
          onClick={() => {
            if (data.quantity > 5) setActiveTab("set");
          }}
        >
          <p>Set</p>
          <div className="product-multi-outside">
            <div className="product-multi-inside">
              <HiPlus onClick={handleIncrement} />
              <span style={{ color: "#fff" }}>{quantity}</span>
              <HiMinus onClick={handleDecrement} />
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={addToCartHandler}
        className={`addtocart-btn ${
          isInCard.length > 0 ? "inCard" : "inNotCard"
        }`}
      >
        Add to cart
        {isInCard.length > 0 && (
          <span style={{ color: "black", marginLeft: "15px" }}>✔</span>
        )}
      </button>
    </>
  );
};

const ProductDesTab = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="product-description">
      <div className="tab-bar product-description-title">
        <button
          className={`tab-button ${activeTab === "tab1" ? "active-btn" : ""}`}
          onClick={() => handleTabClick("tab1")}
        >
          Description
        </button>
        <button
          className={`tab-button ${activeTab === "tab2" ? "active-btn" : ""}`}
          onClick={() => handleTabClick("tab2")}
        >
          Compatibility
        </button>
        <button
          className={`tab-button ${activeTab === "tab3" ? "active-btn" : ""}`}
          onClick={() => handleTabClick("tab3")}
        >
          Shiping & Returns
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "tab1" && (
          <div>
            <p>
              Swop’s Flat Rectangle NFC’s are designed to be durable and simple
              to use. The Flat is great to put under any phone case(non-metal)
              Users can download our app to program any of our NFC’s with the
              click of a button. This will attach your profile to the NFC for
              easy sharing. You just tap the NFC on any compatible phone to
              share your digital business card, microsite, crypto address, the
              possibilities are endless. Use the swop app to set up and share: -
              contact info - social media - websites - payment apps - videos and
              files - and more The other person doesn't need an app or a Swop to
              receive your info.
            </p>
          </div>
        )}
        {activeTab === "tab2" && (
          <div>
            <p>dummy data 2</p>
          </div>
        )}
        {activeTab === "tab3" && (
          <div>
            <p>Dummy data 3</p>
          </div>
        )}
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="home-how-it-work">
      <h2>HOW ITS WORKS</h2>
      <p className="hide-mobile-view">
        Swop is free to download and very easy to get started. After making a
        profile and getting setup be
        <br />
        sure to order a NFC. Our technology is compatible with all current and
        most
        <br />
        modern models of smartphones. Never miss an opportunity
        <br />
        again with Swop.
      </p>
      <p className="hide-pc-view">
        Swop is free to download and very easy to get started. After making a
        profile and getting setup be sure to order a NFC. Our technology is
        compatible with all current and most modern models of smartphones. Never
        miss an opportunity again with Swop.
      </p>
      <div className="background-level"></div>
      <div className="row-div">
        <div className="col-4">
          <Image
            src={number1}
            alt="number_image"
            height={71}
            width={71}
            className="number-icon"
          />
          <div className="card-how-it">
            <Image src={cardImg1} alt="no_image" width={360} height={540} />
            <h5>
              Set up your <span>SWOP</span> profile
            </h5>
            <p>
              Personlize the look of your digital business card. Add all of your
              contact information.
            </p>
          </div>
        </div>
        <div className="col-4">
          <Image
            src={number2}
            alt="number_image"
            height={71}
            width={71}
            className="number-icon"
          />
          <div className="card-how-it">
            <Image src={cardImg2} alt="no_image" width={360} height={540} />
            <h5>
              Active your <span>SWOP</span> device
            </h5>
            <p>
              Device is made simple so you can get to connecting faster than
              ever before.
            </p>
          </div>
        </div>
        <div className="col-4">
          <Image
            src={number3}
            alt="number_image"
            height={71}
            width={71}
            className="number-icon"
          />
          <div className="card-how-it">
            <Image src={cardImg3} alt="no_image" width={360} height={540} />
            <h5>Ready to connect</h5>
            <p>
              With a single tap you'll be able to transfer your dot.Profile and
              begin connecting with style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SliderSec = () => {
  const { width } = useWindowDimensions();
  SwiperCore.use([Autoplay]);
  return (
    <div className="home-product">
      <h2>OUR PRODUCTS</h2>
      <p className="hide-mobile-view">
        All of our products come with a 30 day warranty where we will send you a
        new NFC no questions asked. NFC chips come in a variety
        <br />
        of shapes and sizes. Some share information faster than others. While
        other types store more data. Be sure to get
        <br />
        the NFC that fits your needs. We also offer custom printing, where we
        can apply your logo
        <br />
        or custom QR code directly to your NFC product.
      </p>
      <p className="hide-pc-view">
        All of our products come with a 30 day warranty where we will send you a
        new NFC no questions asked. NFC chips come in a variety of shapes and
        sizes. Some share information faster than others. While other types
        store more data. Be sure to get the NFC that fits your needs. We also
        offer custom printing, where we can apply your logo or custom QR code
        directly to your NFC product.
      </p>
      <div className="individual-product-slider">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={false}
          effect="coverflow"
          autoplay={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: false,
          }}
          slidesPerView={width < 767 ? 1.5 : 4}
          spaceBetween={35}
          pagination={{
            dynamicBullets: true,
          }}
          initialSlide={1.6}
          style={{
            width: "100%",
            margin: "auto",
            padding: "30px",
            justifyContent: "center",
          }}
        >
          {ProductData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="product-card" key={index}>
                <Link
                  href={{
                    pathname: `product`,
                    query: { _id: item._id },
                  }}
                  key={item._id}
                >
                  <Image
                    src={`/${item.image}`}
                    alt="no_image"
                    height={300}
                    width={300}
                  />
                </Link>
                <h5>{item.title}</h5>
                <p>{item.detail}</p>
                <div className="product-price">
                  <label>{item.price}</label>
                  <Link href="/">Buy</Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
