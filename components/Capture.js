import Image from 'next/image'
import React from 'react'
import icon1 from '../images/card_icon.png'
import icon2 from '../images/iconscan.png'
import icon3 from '../images/info_icon.png'
import shareImage from '../images/capturecomponent.png'
const Capture = () => {
  return (
    <>
      <div className="row-div reverse-direction">
        <div className="col-6">
          <div className="alignment-crd">
            <h3>Capture Leads</h3>
            <p>
              Capture leads from your profile, then favorite, group, sort, and
              manage them all in Popl. Sync with CRM's like Salesforce and
              HubSpot.
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon1} alt="no_image" />{' '}
              <h5>Business Card Scanner</h5>
            </div>
            <p>
              Instantly convert paper business cards into digital connections
              with our AI-powered scanner.
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon2} alt="no_image" /> <h5>Lead Capture Mode</h5>
            </div>
            <p>
              Quickly capture leads with fast autofill as soon as you share your
              profile with others.
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon3} alt="no_image" /> <h5>Your Info, Saved</h5>
            </div>
            <p>
              Popl automatically sends your info to leads via email and text
              message so you don't have to. This gets your more replies so you
              can close more deals.
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

export default Capture
