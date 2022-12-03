import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { ProductData } from '../components/ProductData'
import productimage1 from '../images/productcount1.png'
import productimage2 from '../images/productcount2.png'
import { HiPlus, HiMinus } from 'react-icons/hi'
import { RiFontColor } from 'react-icons/ri'
import cardImg1 from '../images/homeCard1.png'
import cardImg2 from '../images/homeCard2.png'
import cardImg3 from '../images/homeCard3.png'
import Link from 'next/link'

const Product = () => {
  const router = useRouter()
  const { _id } = router.query

  const data = ProductData.filter((item) => item._id === _id)

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="product-details">
          <div className="row-div border-product-detail">
            <div className="col-6 ">
              <div className="product-background">
                <Image
                  src={`/${data.map((elm) => elm.image)}`}
                  alt="no_image"
                  height={575}
                  width={575}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="product-details-content">
                <div className="product-details-content-inside">
                  <h3>Black Rectangle NFC</h3>
                  <h4>$29.99</h4>
                  <h6>
                    Availablity: <span>In Stock</span>
                  </h6>
                  <h5>Color:</h5>
                  <div className="customize-image">
                    <div className="color-container">
                      <div className="product-details-color" id="color-first">
                        <input type="color" />
                      </div>
                      <div className="product-details-color" id="color-second">
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
                  <div className="product-details-quantity">
                    <div className="product-quantity-single">
                      <label>1</label>
                      <p>Single</p>
                      <Image
                        src={productimage1}
                        alt="no_image"
                        height={58}
                        width={86}
                      />
                    </div>
                    <div className="product-quantity-double">
                      <label>2</label>
                      <p>Double</p>
                      <Image
                        src={productimage2}
                        alt="no_image"
                        height={58}
                        width={86}
                      />
                    </div>
                    <div className="product-quantity-multi">
                      <p>Set</p>
                      <div className="product-multi-outside">
                        <div className="product-multi-inside">
                          <HiPlus /> 5 <HiMinus />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="addtocart-btn">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="product-description">
            <div className="product-description-title">
              <h4 id="active-title">Description</h4>
              <h4>Compatibility</h4>
              <h4>Shiping & Returns</h4>
            </div>
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
        </div>
        <div className="home-how-it-work">
          <h2>HOW ITS WORKS</h2>
          <p>
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
          <div className="background-level"></div>
          <div className="row-div">
            <div className="col-4">
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
        <div className="home-product">
          <h2>OUR PRODUCTS</h2>
          <p>
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
          <div className="product-seemore">
            <Link href="/shop">See more</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Product
