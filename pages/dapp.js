import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import searchicon from '../images/dappsearch.png'
import monkey from '../images/dappmonkey.png'
import opensea from '../images/opensea.png'
import explorer from '../images/dappexplorer.png'
import news from '../images/dappnews.png'
import mint from '../images/dappmint.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const DApp = () => {
  SwiperCore.use([Autoplay])
  const sliderData = [
    {
      title: 'Uniswap',
      image: 'dappSliderimg1.png',
    },
    {
      title: 'Ethereum',
      image: 'dappSliderimg2.png',
    },
    {
      title: 'Polygon',
      image: 'dappSliderimg3.png',
    },
  ]
  return (
    <>
      <Navbar />
      <div className="container home-top-margin">
        <div className="d-app-search">
          <h1>Welcome to the world of web3 </h1>
          <Image src={searchicon} alt="no_image" height={40} width={40} />
          <input type="text" />
        </div>
        <div className="dapp-marketplace">
          <div className="row-div">
            <div className="col-8">
              <div className="dapp-marketplace-first">
                <div className="row-div">
                  <div className="col-6">
                    <Image
                      src={monkey}
                      alt="no_image"
                      width={300}
                      height={310}
                      className="monkey-img"
                    />
                  </div>
                  <div className="col-6">
                    <div className="opensea-img">
                      <Image
                        src={opensea}
                        alt="no_image"
                        height={114}
                        width={477}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h4>NFT Marketplace</h4>
            </div>
            <div className="col-4">
              <div className="card-dapp">
                <Image
                  src={`/app1.png`}
                  alt="no_image"
                  width={300}
                  height={300}
                  className="card-dapp-img"
                />
                <div className="content-dapp">
                  <Image
                    src={`/iconapp1.png`}
                    alt="no_image"
                    width={100}
                    height={100}
                  />
                  <div className="content-web3-inside content-dapp-in">
                    <h5>Uniswap</h5>
                    <p>Most usable dapps......</p>
                  </div>
                  <label>GET</label>
                </div>
              </div>
              <h4 id="extra-margin-dapp">Defi Coin</h4>
            </div>
          </div>
        </div>
        <div className="dapp-slider">
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
            slidesPerView={3.1}
            spaceBetween={35}
            pagination={{
              dynamicBullets: true,
            }}
            initialSlide={1.6}
            style={{
              width: '100%',
              margin: 'auto',
              padding: '30px',
              justifyContent: 'center',
            }}
          >
            {sliderData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="dapp-slider-card">
                  <Image
                    src={`/${item.image}`}
                    alt="no_image"
                    height={324}
                    width={548}
                  />
                  <h4>{item.title}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="dapp-bottom">
          <div className="dapp-bottom1">
            <Image src={explorer} alt="no_image" height={371} width={720} />
            <h4>Explorer</h4>
          </div>
          <div className="dapp-bottom2">
            <Image src={news} alt="no_image" height={371} width={342} />
            <h4>News</h4>
          </div>
          <div className="dapp-bottom3">
            <Image src={mint} alt="no_image" height={371} width={474} />
            <h4>Mint</h4>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DApp
