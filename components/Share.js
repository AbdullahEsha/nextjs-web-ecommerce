import Image from 'next/image'
import React from 'react'
import icon1 from '../images/icontap.png'
import icon2 from '../images/iconscan.png'
import icon3 from '../images/iconplane.png'
import shareImage from '../images/sharecomponent.png'

const Share = () => {
  return (
    <>
      <div className="row-div">
        <div className="col-6">
          <div className="alignment-crd">
            <h3>Instantly Share Anything</h3>
            <p>
              Instantly share your info with a tap, scan, or send. Share contact
              info, social media, websites, payment apps, files, videos and
              more.
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon1} alt="no_image" /> <h5>Tap</h5>
            </div>
            <p>
              Just tap one of our smart products to an iPhone or Android to
              share without them needing an app.
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon2} alt="no_image" /> <h5>Scan</h5>
            </div>
            <p>
              Use your free, in-app Popl QR code with advanced analytics and
              unlimited scans.
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon3} alt="no_image" /> <h5>Share</h5>
            </div>
            <p>
              Send your digital business card via text message, email, Airdrop,
              email signatures, Zoom backgrounds, iPhone widgets and more.
            </p>
          </div>
        </div>
        <div className="col-6">
          <div className="share-image-fit">
            <Image src={shareImage} alt="no_image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Share
