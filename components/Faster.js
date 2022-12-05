import Image from 'next/image'
import React from 'react'
import icon1 from '../images/icontap.png'
import icon2 from '../images/iconscan.png'
import icon3 from '../images/iconplane.png'
import shareImage from '../images/sharecomponent.png'
const Faster = () => {
  return (
    <>
      <div className="row-div">
        <div className="col-6">
          <div className="alignment-crd">
            <h3>Grow Faster</h3>
            <p>
              Make more connections, more leads, and more sales with Popl.
              Connect online at the moment of meeting, rather than hoping they
              do later.
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon1} alt="no_image" />{' '}
              <h5>Business Intelligence</h5>
            </div>
            <p>
              Access data that allows you to finally measure true ROI of your
              networking and events.
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon2} alt="no_image" /> <h5>Engagement</h5>
            </div>
            <p>
              Increase engagement on social media platforms and gather more 5
              star reviews than ever before.
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon3} alt="no_image" /> <h5>24/7 1-on-1 Support</h5>
            </div>
            <p>
              Create your digital business card to perfection with our 24/7
              1-on-1 assistance. We are the only digital business card company
              that offers this.
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

export default Faster
