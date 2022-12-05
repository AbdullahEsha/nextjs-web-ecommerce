import Image from 'next/image'
import footerSwop from '../images/swopfooter.png'
import footerQrCode from '../images/footerQrCode.png'
import Link from 'next/link'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-out container">
          <div className="footer-top">
            <div>
              <Image src={footerSwop} alt="footer-logo" height={30} />
              <div className="footer-first-content" id="footer-link-bottom">
                <h4>
                  Scan to
                  <br />
                  get swop
                </h4>{' '}
                <Image src={footerQrCode} alt="footer-logo" height={80} />
              </div>
            </div>
            <div>
              <h4>Shop</h4>
              <div className="footer-link" id="footer-link-bottom">
                <Link href="/">Custom product </Link>
                <Link href="/">Cards </Link>
                <Link href="/">Metal Cards </Link>
                <Link href="/">Swop XL </Link>
                <Link href="/">Swop Band </Link>
              </div>
            </div>
            <div>
              <h4>Company</h4>
              <div className="footer-link" id="footer-link-bottom">
                <Link href="/">Swop Pro </Link>
                <Link href="/">Ambassador </Link>
                <Link href="/">Distributor </Link>
                <Link href="/">Help Center </Link>
                <Link href="/">Carrer </Link>
              </div>
            </div>
            <div>
              <h4>Legal</h4>
              <div className="footer-link" id="footer-link-bottom">
                <Link href="/">Privacy Policy </Link>
                <Link href="/">Terms Of Use </Link>
                <Link href="/">Refund Policy </Link>
              </div>
            </div>
            <div className="footer-inform-content">
              <h4>By subscribing we inform about our new update</h4>
              <div className="footer-link">
                <input
                  type="text"
                  className="subscribing-input"
                  placeholder="Enter your email"
                />
                <button className="subscribing-btn">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="footer-mid">
            <Link href="/help">Help Center </Link>
            <Link href="/return-policy">Returns </Link>
            <Link href="/contact">Contact </Link>
            <Link href="/">News </Link>
          </div>
          <div className="footer-bottom">
            <label>© {new Date().getFullYear()}-Copywrite by swopme.co</label>
            <div className="icon-footer">
              <a href="https://www.facebook.com/swopmeapp" target="blank">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.instagram.com/swopme.app/" target="blank">
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCohnJ2WcoSIEaLbk9jqqoeg"
                target="blank"
              >
                <FaYoutube size={20} />
              </a>
              <a href="https://twitter.com/swopmeapp" target="blank">
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/swop-technologies/"
                target="blank"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
