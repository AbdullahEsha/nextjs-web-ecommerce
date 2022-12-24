import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useWindowDimensions from '../components/useWindowDimensions'
import { HiOutlineArrowRight } from 'react-icons/hi'
import homeImage1 from '../images/homeimage1.png'
import homeImage2 from '../images/homeimage2.png'
import homeImage3 from '../images/homeimage3.png'
import icon1 from '../images/iconmouse.png'
import icon2 from '../images/iconmusic.png'
import icon3 from '../images/iconvideo.png'
import icon4 from '../images/icongraph.png'
import icon5 from '../images/iconfollowing.png'
import icon6 from '../images/iconlink.png'
import icon7 from '../images/icontodo.png'
import cardImg1 from '../images/homeCard1.png'
import cardImg2 from '../images/homeCard2.png'
import cardImg3 from '../images/homeCard3.png'
import cardIcon1 from '../images/iconshareinfo.png'
import cardIcon2 from '../images/iconcapture.png'
import cardIcon3 from '../images/iconexport.png'
import cardIcon4 from '../images/icongofaster.png'
import number1 from '../images/number-icon1.png'
import number2 from '../images/number-icon2.png'
import number3 from '../images/number-icon3.png'
import Share from '../components/Share'
import { ProductData } from '../components/ProductData'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination } from 'swiper'
// import SwiperCore, { Autoplay } from 'swiper'
// import 'swiper/css'
// import 'swiper/css/navigation'
import { useState } from 'react'
import Capture from '../components/Capture'
import Export from '../components/Export'
import Faster from '../components/Faster'

export default function Home() {
  const { width } = useWindowDimensions()
  const [features, setFeatures] = useState('share')
  // SwiperCore.use([Autoplay])
  // const appData = [
  //   {
  //     id: 1,
  //     title: 'Uniswap',
  //     titleDetails: 'Most usable dapps......',
  //     image: 'app1.png',
  //     icon: 'iconapp1.png',
  //   },
  //   {
  //     id: 2,
  //     title: 'Ethereum',
  //     titleDetails: 'Most usable dapps......',
  //     image: 'app2.png',
  //     icon: 'iconapp2.png',
  //   },
  //   {
  //     id: 2,
  //     title: 'Polygon',
  //     titleDetails: 'Most usable dapps......',
  //     image: 'app3.png',
  //     icon: 'iconapp3.png',
  //   },
  // ]

  return (
    <div>
      <Navbar />
      <div className="container home-top-margin">
        <video
          controls={false}
          muted="true"
          preload="auto"
          autoPlay={true}
          loop
          playsInline
          id="video"
          unoptimized={true}
          type="video/mp4"
        >
          <source src={'/banner.mp4'} type="video/mp4" />
        </video>
        <Link href="/" className="shop-now-btn">
          Shop Now <HiOutlineArrowRight size={20} />
        </Link>

        <div className="home-networking">
          <h2>SWOP FEATURES FOR BETTER NETWORKING</h2>
          <p className="hide-mobile-view">
            Swop’s Flat Rectangle NFC’s are designed to be durable and simple to
            use. The Flat is great to put under any phone case(non-metal) Users
            can
            <br />
            download our app to program any of our NFC’s with the click of a
            button. This will attach your profile to the NFC for easy sharing.
            <br />
            You just tap the NFC on any compatible phone to share your digital
            business card, microsite, crypto address,
            <br />
            the possibilities are endless. Use the swop app to.
          </p>
          <p className="hide-pc-view">
            Swop’s Flat Rectangle NFC’s are designed to be durable
            <br />
            and simple to use. The Flat is great to put under
            <br />
            any phone case(non-metal) Users can
            <br />
            download our app.
          </p>
          <div className="home-networking-ber">
            <div className="networking-row">
              <div
                className={`networking-crd ${
                  features === 'share' && 'networking-active'
                }`}
                onClick={() => setFeatures('share')}
              >
                <Image src={cardIcon1} alt="no_image" height={56} width={56} />
                <p>Share Your Info</p>
              </div>
              <div
                className={`networking-crd ${
                  features === 'capture' && 'networking-active'
                }`}
                onClick={() => setFeatures('capture')}
              >
                <Image src={cardIcon2} alt="no_image" height={56} width={56} />
                <p>Capture Leads</p>
              </div>
              <div
                className={`networking-crd ${
                  features === 'export' && 'networking-active'
                }`}
                onClick={() => setFeatures('export')}
              >
                <Image src={cardIcon3} alt="no_image" height={56} width={56} />
                <p>Export to CRM</p>
              </div>
              <div
                className={`networking-crd ${
                  features === 'faster' && 'networking-active'
                }`}
                onClick={() => setFeatures('faster')}
              >
                <Image src={cardIcon4} alt="no_image" height={56} width={56} />
                <p>Go Faster</p>
              </div>
            </div>
          </div>
          <div className="features-content-container">
            {features === 'share' && <Share />}
            {features === 'capture' && <Capture />}
            {features === 'export' && <Export />}
            {features === 'faster' && <Faster />}
          </div>
        </div>

        <div className="creators-container">
          <h2>Creators</h2>
          <p className="hide-mobile-view">
            Swop’s Flat Rectangle NFC’s are designed to be durable and simple to
            use. The Flat is great to put under any phone case(non-metal) Users
            can
            <br />
            download our app to program any of our NFC’s with the click of a
            button. This will attach your profile to the NFC for easy sharing.
            <br />
            You just tap the NFC on any compatible phone to share your digital
            business card, microsite, crypto address,
            <br />
            the possibilities are endless. Use the swop app to.
          </p>
          <p className="hide-pc-view">
            Swop’s Flat Rectangle NFC’s are designed to be durable
            <br />
            and simple to use. The Flat is great to put under
            <br />
            any phone case(non-metal) Users can
            <br />
            download our app.
          </p>
        </div>

        <div className="home-background1">
          <div className="row-div">
            <div className="col-6">
              <div className="home-image1">
                <Image src={homeImage1} alt="no_image" />
              </div>
            </div>
            <div className="col-6">
              <div className="home-content1-outside">
                <div className="home-content1">
                  <div className="row-div">
                    <div className="col-6">
                      <div className="home-content1-card">
                        <Image
                          src={icon1}
                          alt="no_image"
                          height={70}
                          width={70}
                        />
                        <h5>Track analytics</h5>
                        <p>
                          Track the analytics on how your links do business
                          card. Add all of your contact information.
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="home-content1-card">
                        <Image
                          src={icon2}
                          alt="no_image"
                          height={70}
                          width={70}
                        />
                        <h5>All music in one place</h5>
                        <p>
                          Have all your music in one place business card. Add
                          all of your contact information.
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="home-content1-card">
                        <Image
                          src={icon3}
                          alt="no_image"
                          height={70}
                          width={70}
                        />
                        <h5>Easily accessible videos</h5>
                        <p>
                          Personlize the look of your digital business card. Add
                          all of your contact information.
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="home-content1-card">
                        <Image
                          src={icon4}
                          alt="no_image"
                          height={70}
                          width={70}
                        />
                        <h5>One click order</h5>
                        <p>
                          One click order on any products business card. Add all
                          of your contact information.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <h2 className="heading-line hide-mobile-view">Influencers</h2>
        <div className="home-background2 hide-mobile-view">
          <div className="row-div">
            <div className="col-6">
              <div className="home-content1-outside">
                <div className="home-content1">
                  <div className="row-div">
                    <div className="col-6">
                      <div className="home-content1-card">
                        <Image
                          src={icon5}
                          alt="no_image"
                          height={70}
                          width={70}
                        />
                        <h5>Gain A Following</h5>
                        <p>
                          Personlize the look of your digital business card. Add
                          all of your contact information.
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="home-content1-card">
                        <Image
                          src={icon2}
                          alt="no_image"
                          height={70}
                          width={70}
                        />
                        <h5>Show of videos</h5>
                        <p>
                          Personlize the look of your digital business card. Add
                          all of your contact information.
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="home-content1-card">
                        <Image
                          src={icon7}
                          alt="no_image"
                          height={70}
                          width={70}
                        />
                        <h5>Show Your Social Media</h5>
                        <p>
                          Personlize the look of your digital business card. Add
                          all of your contact information.
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="home-content1-card">
                        <Image
                          src={icon6}
                          alt="no_image"
                          height={70}
                          width={70}
                        />
                        <h5>Embed links</h5>
                        <p>
                          Personlize the look of your digital business card. Add
                          all of your contact information.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="home-image1">
                <Image
                  src={homeImage2}
                  alt="no_image"
                  width={828}
                  height={811}
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="heading-line hide-mobile-view">Realtor</h2>
        <div className="home-background1 hide-mobile-view">
          <div className="row-div">
            <div className="col-6">
              <div className="home-image1">
                <Image
                  src={homeImage3}
                  alt="no_image"
                  width={828}
                  height={811}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="home-content1-outside">
                <div className="home-content1">
                  <div className="row-div">
                    <div className="col-6">
                      <div className="home-content1-card">
                        <Image
                          src={icon1}
                          alt="no_image"
                          height={70}
                          width={70}
                        />
                        <h5>Track analytics</h5>
                        <p>
                          Track the analytics on how your links do business
                          card. Add all of your contact information.
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="home-content1-card">
                        <Image
                          src={icon2}
                          alt="no_image"
                          height={70}
                          width={70}
                        />
                        <h5>All music in one place</h5>
                        <p>
                          Have all your music in one place business card. Add
                          all of your contact information.
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="home-content1-card">
                        <Image
                          src={icon3}
                          alt="no_image"
                          height={70}
                          width={70}
                        />
                        <h5>Easily accessible videos</h5>
                        <p>
                          Personlize the look of your digital business card. Add
                          all of your contact information.
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="home-content1-card">
                        <Image
                          src={icon4}
                          alt="no_image"
                          height={70}
                          width={70}
                        />
                        <h5>One click order</h5>
                        <p>
                          One click order on any products business card. Add all
                          of your contact information.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="home-how-it-work">
          <h2>HOW ITS WORKS</h2>
          <p className="hide-mobile-view">
            Swop’s Flat Rectangle NFC’s are designed to be durable and simple to
            use. The Flat is great to put under any phone case(non-metal) Users
            can
            <br />
            download our app to program any of our NFC’s with the click of a
            button. This will attach your profile to the NFC for easy sharing.
            <br />
            You just tap the NFC on any compatible phone to share your digital
            business card, microsite, crypto address,
            <br />
            the possibilities are endless. Use the swop app to.
          </p>
          <p className="hide-pc-view">
            Swop’s Flat Rectangle NFC’s are designed to be durable
            <br />
            and simple to use. The Flat is great to put under
            <br />
            any phone case(non-metal) Users can
            <br />
            download our app.
          </p>
          <div className="background-level" />
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
                  Personlize the look of your digital business card. Add all of
                  your contact information.
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
                  With a single tap you'll be able to transfer your dot.Profile
                  and begin connecting with style.
                </p>
              </div>
            </div>
          </div>
        </div>

        <video
          controls={false}
          muted="true"
          preload="auto"
          autoPlay
          loop
          playsInline
          id="bottom-video-position"
          unoptimized={true}
        >
          <source src={'/banner2.mp4'} type="video/mp4" />
        </video>
        <div className="subscribe-from">
          <input type="text" placeholder="Put email for beta invite" />
          <button>Submit</button>
        </div>

        <div className="home-product extra-margin">
          <h2>OUR PRODUCTS</h2>
          <p className="hide-mobile-view">
            Swop’s Flat Rectangle NFC’s are designed to be durable and simple to
            use. The Flat is great to put under any phone case(non-metal) Users
            can
            <br />
            download our app to program any of our NFC’s with the click of a
            button. This will attach your profile to the NFC for easy sharing.
            <br />
            You just tap the NFC on any compatible phone to share your digital
            business card, microsite, crypto address,
            <br />
            the possibilities are endless. Use the swop app to.
          </p>
          <p className="hide-pc-view">
            Swop’s Flat Rectangle NFC’s are designed to be durable
            <br />
            and simple to use. The Flat is great to put under
            <br />
            any phone case(non-metal) Users can
            <br />
            download our app.
          </p>
          <div className="justify-grid">
            {ProductData.map(
              (item, index) =>
                index < 8 && (
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
                ),
            )}
          </div>
          <div className="product-seemore">
            <Link href="/shop">See more</Link>
          </div>
        </div>

        {/* <div className="home-web3-browser">
          <h2>Check out our DApp Browser for the Web 3 universe</h2>
          <p className="hide-mobile-view">
            Swop’s Flat Rectangle NFC’s are designed to be durable and simple to
            use. The Flat is great to put under any phone case(non-metal) Users
            can
            <br />
            download our app to program any of our NFC’s with the click of a
            button. This will attach your profile to the NFC for easy sharing.
            <br />
            You just tap the NFC on any compatible phone to share your digital
            business card, microsite, crypto address,
            <br />
            the possibilities are endless. Use the swop app to.
          </p>
          <p className="hide-pc-view">
            Swop’s Flat Rectangle NFC’s are designed to be durable
            <br />
            and simple to use. The Flat is great to put under
            <br />
            any phone case(non-metal) Users can
            <br />
            download our app.
          </p>
          <div className="slider-web3-browser">
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
              slidesPerView={width < 767 ? 1.5 : 3.5}
              spaceBetween={30}
              centeredSlides
              pagination={{
                dynamicBullets: true,
              }}
              initialSlide={1.6}
              style={{
                width: '100%',
                margin: 'auto',
                padding: '35px',
                justifyContent: 'center',
              }}
            >
              {appData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="card-web3">
                    <Image
                      src={`/${item.image}`}
                      alt="no_image"
                      width={300}
                      height={300}
                      className="card-web3-image"
                    />
                    <div className="content-web3">
                      <Image
                        src={`/${item.icon}`}
                        alt="no_image"
                        width={40}
                        height={40}
                      />
                      <div className="content-web3-inside">
                        <h5>{item.title}</h5>
                        <p>{item.titleDetails}</p>
                      </div>
                      <label>
                        <Link href="/">GET</Link>
                      </label>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div> */}
      </div>
      <div className="container check_out_dapp_browser">
        <div className="row-div">
          <div className="col-6">
            <div className="check_out_dapp_content-out">
              <div className="check_out_dapp_content">
                <h2>Check out our DApp Browser for the Web3 universe</h2>
                <p>
                  Swop’s Flat Rectangle NFC’s are designed to be durable and
                  simple to use. download our app to program any of our NFC’s
                  with the click of a button. You just tap the NFC on any
                  compatible phone to share your the possibilities are endless.
                  Use the swop app to.
                </p>
                <Link href="/">Get your Dapp</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="check_out_dapp_button">
              <div>
                <Link href="/">Explore All Dapps</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
