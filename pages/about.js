import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { HiOutlineArrowRight } from 'react-icons/hi'
import image1 from '../images/abouttoken.png'
import image2 from '../images/aboutshare.png'
import image3 from '../images/aboutqrcode.png'
import image4 from '../images/aboutanalytics.png'
import cardImg1 from '../images/homeCard1.png'
import cardImg2 from '../images/homeCard2.png'
import cardImg3 from '../images/homeCard3.png'
import features1 from '../images/aboutfeatures1.png'
import features2 from '../images/aboutfeatures2.png'
import features3 from '../images/aboutfeatures3.png'
import roadmap from '../images/aboutroadmap.png'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <video controls src={'/banner.mp4'} muted loop autoPlay />
        <Link href="/" className="shop-now-btn">
          Shop Now <HiOutlineArrowRight size={20} />
        </Link>

        <div className="about-futuristic">
          <h2>FUTURISTIC FEATURES</h2>
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
        </div>
        <div className="about-mid-container">
          <div className="row-div">
            <div className="col-6">
              <div className="about-card">
                <Image src={image1} alt="no_image" height={554} width={437} />
                <h5>Token Powered websites</h5>
                <p>
                  Build multiple sites that are web3 enabled and hosted by swop
                  and created/ edited n the swop app, create token powered sites
                  that only allow the people you want, to see your content.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="about-card">
                <Image src={image2} alt="no_image" height={554} width={437} />
                <h5>Share With your NFC</h5>
                <p>
                  Share your profile with anyone just by tapping your NFC on
                  their phone even if they dont have the swop app.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="about-card">
                <Image src={image3} alt="no_image" height={554} width={437} />
                <h5>Share with your QR</h5>
                <p>
                  Also share anything with our qr system, you can customize your
                  QR however you want even use it to direct people directly to
                  your website or payment.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="about-card">
                <Image src={image4} alt="no_image" height={554} width={437} />
                <h5>Analytics</h5>
                <p>
                  Track everything important in our simple to use dashboard. Our
                  dashboard keeps track of all leads and lets you export to your
                  CRM, even tells you the engagement of each profile and the
                  individual links.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-how-it-work">
          <h2>HOW TO CUSTOMIZE A NFC</h2>
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
                <h5>Upload logo for your profile</h5>
                <p>
                  Personlize the look of your digital business card. Add all of
                  your contact information.
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="card-how-it">
                <Image src={cardImg2} alt="no_image" width={360} height={540} />
                <h5>Confirm Design with our personal designer</h5>
                <p>
                  Device is made simple so you can get to connecting faster than
                  ever before.
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="card-how-it">
                <Image src={cardImg3} alt="no_image" width={360} height={540} />
                <h5>We Print and ship your NFC </h5>
                <p>
                  With a single tap you'll be able to transfer your dot.Profile
                  and begin connecting with style.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-features">
          <div className="row-div">
            <div className="col-6">
              <div className="features-card-image">
                <Image
                  src={features1}
                  alt="no_image"
                  height={548}
                  width={421}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="features-card-content">
                <h4>Payments</h4>
                <p>
                  Accept payments anywhere in the world with our Crypto or
                  Stripe Integrations. Accept Debit Card or Apple payments in a
                  tap directly through your website.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="features-card-content">
                <h4>Leads</h4>
                <p>
                  Automate your leads with our Swop infrastructure and easily
                  export it to any CRM to help you stay connected with your
                  customer.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="features-card-image">
                <Image
                  src={features2}
                  alt="no_image"
                  height={548}
                  width={421}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="features-card-image">
                <Image
                  src={features3}
                  alt="no_image"
                  height={548}
                  width={421}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="features-card-content">
                <h4>Retention</h4>
                <p>
                  Stay Connected with your customer in the web 3 world by
                  sending them NFTs to keep them coming back to your store.We
                  can mint you NFTs that serve as promo codes or subscription
                  access to your ecosystem.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="features-card-content">
                <h4>Non custodial</h4>
                <p>
                  Take control with non custodial wallets. Store your private
                  key and prevent 3rd parties from controlling your data and
                  wallet.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="features-card-image">
                <Image
                  src={features2}
                  alt="no_image"
                  height={548}
                  width={421}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="about-roadmap">
          <h2>PRODUCT ROADMAP</h2>
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
          <Image src={roadmap} alt="no_image" height={291} width={1406} />
          <div className="roadmap-content">
            <div className="roadmap-1">
              <h5>
                Product
                <br />
                Select
              </h5>
              <p>
                This section presents a few selected branding projects of our
                work. More projects are to be found on our website, social
                media.
              </p>
            </div>
            <div className="roadmap-2">
              <h5>
                Product
                <br />
                Customize
              </h5>
              <p>
                This section presents a few selected branding projects of our
                work. More projects are to be found on our website, social
                media.
              </p>
            </div>
            <div className="roadmap-3">
              <h5>
                Add To
                <br />
                Cart
              </h5>
              <p>
                This section presents a few selected branding projects of our
                work. More projects are to be found on our website, social
                media.
              </p>
            </div>
            <div className="roadmap-4">
              <h5>
                Select Payment
                <br />
                Method
              </h5>
              <p>
                This section presents a few selected branding projects of our
                work. More projects are to be found on our website, social
                media.
              </p>
            </div>
            <div className="roadmap-5">
              <h5>
                Shipping
                <br />
                Product
              </h5>
              <p>
                This section presents a few selected branding projects of our
                work. More projects are to be found on our website, social
                media.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
