import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { ProductData } from '../components/ProductData'
import Link from 'next/link'

const Shop = () => {
  return (
    <>
      <Navbar />
      <div className="container home-top-margin">
        <div className="shop-top-content">
          <h1>ALL DIGITAL BUSINESS CARD</h1>
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
          <div className="shop-product-ads">
            <div className="row-div">
              <div className="col-6">
                <div className="shop-product-ads-img">
                  <Image src={'/product2.png'} width={450} height={450} />
                </div>
              </div>
              <div className="col-6">
                <div className="shop-product-content">
                  <div className="shop-product-content-inside">
                    <h4>SWOP Wrist Band</h4>
                    <p>Available Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row-div justify">
            {ProductData.map((item, index) => (
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
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Shop
