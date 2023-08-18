import { Link } from 'react-router-dom'
import { IMAGE } from '../constent/theme'

const Home = () => {
  const btn = () => {

  }
  return (
    <>
      <div className="banner-section line-move" style={{ backgroundImage: `url(${IMAGE.backgroundBg1})`, backgroundSize: 'cover' }}>
        <div className="banner-inner bnr-center">
          <h3 className="sub-title">I’ Am <span className="text-gradient">Thomas Grady</span></h3>
          <h2 className="title">Photographer</h2>
          <Link onClick={btn} to="/resume-photographer" className="site-button outline button-md outline-half">Check My Cv</Link>
        </div>
        <div className="social-sidebar">
          <ul>
            <li><Link target="_blank" to="/https://www.facebook.com/dexignzone/">Facebook</Link></li>
            <li><Link target="_blank" to="/https://twitter.com/dexignzones">Twitter</Link></li>
            <li><Link target="_blank" to="/https://www.linkedin.com/in/dexignzone">Linkedin</Link></li>
          </ul>
        </div>
        <div className="copyright-fixed"><Link to="/https://www.dexignlab.com/" target="_blank">DexignLab</Link> © 2023 All rights reserved.</div>
        <div className="resume-user">
          <div className="resume-info">
            <img src={IMAGE.imagePic1} alt="" />
            <h6 className="title">Thomas Grady</h6>
            <span className="text-primary">photographer</span>
          </div>
          <Link to="/portfolio-photographer" className="site-button">Check portfolio</Link>
        </div>
      </div>
    </>
  )
}

export default Home