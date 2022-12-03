import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import dropdown from '../images/dropdown.png'
import cross from '../images/cross.png'
import Image from 'next/image'

const Help = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="help-container">
          <h2>HOW CAN WE HELP?</h2>
          <p>
            Sign up for text and support
            <br />
            Text ‘SWOP’ to <span>67839</span>
            <br />
            Email us: <a href="mailto:support@swopme.co">support@swopme.co</a>
          </p>
          <p id="help-paragraph">
            The NFC hype isn’t what it once was, but it’s still a handy feature
            you should take advantage of, or at least get to know. The NFC hype
            isn’t what it once was, but it’s still a handy feature you should
            take advantage of, or at least get to know.
          </p>
          <div className="help-youtube">
            <div className="help-youtube-inside">
              <iframe
                src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                frameBorder={0}
              />
              <p>How to Active SWOP</p>
            </div>
            <div className="help-youtube-inside">
              <iframe
                src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                frameBorder={0}
              />
              <p>How to connect SWOP an Iphone</p>
            </div>
            <div className="help-youtube-inside">
              <iframe
                src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                frameBorder={0}
              />
              <p>How to SWOP connect an Android</p>
            </div>
            <div className="help-youtube-inside">
              <iframe
                src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                frameBorder={0}
              />
              <p>How to Active SWOP</p>
            </div>
          </div>
          <div className="frequently-asked">
            <h2>Frequently Asked Questions (FAQ)</h2>
            <div className="troubleshoot">
              <h4>Troubleshooting SWOP</h4>
            </div>
            <div className="help-detail-title">
              <h4>General 💎</h4>
            </div>
            <div className="help-detail">
              <p>Not working on Iphone?</p>
              <Image src={dropdown} alt="icon_image" height={11} width={18} />
            </div>
            <div className="help-detail">
              <p>Not working on Android?</p>
              <Image src={dropdown} alt="icon_image" height={11} width={18} />
            </div>
            <div className="help-detail">
              <p>What is SWOP?</p>
              <Image src={dropdown} alt="icon_image" height={11} width={18} />
            </div>
            <div className="help-detail">
              <p>Can i order custom SWOP?</p>
              <Image src={cross} alt="icon_image" height={14} width={14} />
            </div>
            <p className="help-detail-content">
              Absolutely! Email us at b2b@SWOPME.co to start a conversation with
              us! 📈
              <br />
              No! The other person does not need a SWOP or app to receive your
              SWOP profile. That's the beauty of SWOP ⚡️
              <br />s If their phone is on this list of compatible devices you
              can pop to their phone. If it is not, just use your SWOP QR code
              on your profile to share!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Help
