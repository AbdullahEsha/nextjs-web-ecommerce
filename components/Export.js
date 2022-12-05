import Image from 'next/image'
import React from 'react'
import icon1 from '../images/icontap.png'
import icon2 from '../images/iconscan.png'
import icon3 from '../images/iconplane.png'
import shareImage from '../images/sharecomponent.png'
const Export = () => {
  return (
    <>
      <div className="row-div">
        <div className="col-6">
          <div className="alignment-crd">
            <h3>Export to CRM</h3>
            <p>
              Popl is the fastest way to convert in-person connections into CRM
              leads without any manual data entry.
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon1} alt="no_image" /> <h5>Works with your CRM!</h5>
            </div>
            <p>
              We integrate directly with Salesforce, HubSpot, Outlook, Zoho and
              many others.
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon2} alt="no_image" /> <h5>For Teams</h5>
            </div>
            <p>
              Export all leads collected by your team while keeping track of
              lead owners, locations, and notes.
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon3} alt="no_image" /> <h5>4000+ apps</h5>
            </div>
            <p>
              Sync team members from HR platforms, automate data-entry and
              marketing flows, set up Zapier integrations, the possibilities are
              endless.
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

export default Export
