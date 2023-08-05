import "./Footer.css"

const Footer = () => {
  return (
    <div className="Footer">
      <div className="myride">
        <img src="/images/logofooter-ride.png" alt="" />
        <p>MyRide Inc., 2nd Floor, New York, NY 10016</p>
        <div className="social-icons">
          <img src="/images/facebook.png" alt="" />
          <img src="/images/instagram.png" alt="" />
          <img src="/images/twitter.png" alt="" />
        </div>
        </div>
        <div className="Links">
        <div className="Company">
          <h3>Company</h3>
          <p>About Us</p>
          <p>News</p>
          <p>Careers</p>
          <p>How We Work</p>
          </div>
        <div className="Support">
          <h3>Support</h3>
          <p>FQA</p>
          <p>US Office</p>
          <p>Asia Office</p>
          <p>Help Center</p>
        </div>
        <div className="More">
          <h3>More</h3>
          <p>Become a partner</p>
          <p>Partner Support</p>
          <p>Mobile App Links</p>
        </div>
        </div>
        </div>
  )
}

export default Footer