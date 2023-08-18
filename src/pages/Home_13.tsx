import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"

const Home_13 = () => {
  return (
      <>
          <div className="banner-section fullscreen business-bnr" style={{ backgroundImage: `url(${IMAGE.backgroundBg13})` }}>
              <div className="video">
                  <div className="wrapper">
                      <iframe id="video-iframe" src="https://www.youtube.com/embed/xJIlTbBWxek?modestbranding=0&showinfo=0&controls=0&autoplay=1&playlist=xJIlTbBWxek&loop=1&mute=1&rel=0&allowfullscreen=true&wmode=transparent&iv_load_policy=3&cc_load_policy=0&playsinline=0&html5=1&playerapiid=videoWithJs&enablejsapi=1&start=10&vq=hd1080"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" ></iframe>
                  </div>
              </div>
              <div className="banner-inner bnr-left">
                  <h3 className="sub-title">I’ Am <span className="text-gradient">Thomas Grady</span></h3>
                  <h2 className="title">YouTube Video</h2>
                  <Link to="/resume-youtube" className="site-button outline button-md outline-half">Check My Cv</Link>
                  <img src={IMAGE.backgroundBgPic13} className="main-content" alt="" />
              </div>
              <div className="social-sidebar">
                  <ul>
                      <li><Link target="_blank" to="https://www.facebook.com/dexignzone/">Facebook</Link></li>
                      <li><Link target="_blank" to="https://twitter.com/dexignzones">Twitter</Link></li>
                      <li><Link target="_blank" to="https://www.linkedin.com/in/dexignzone">Linkedin</Link></li>
                  </ul>
              </div>
              <div className="copyright-fixed"><Link to="https://www.dexignlab.com/" target="_blank">DexignLab</Link> © 2023 All rights reserved.</div>
              <div className="resume-user">
                  <div className="resume-info">
                      <img src={IMAGE.imagePic13} alt="" />
                      <h6 className="title">Thomas Grady</h6>
                      <span className="text-primary">YouTuber</span>
                  </div>
                  <Link to="/portfolio-youtube" className="site-button">Check portfolio</Link>
              </div>
          </div>
      </>
  )
}

export default Home_13