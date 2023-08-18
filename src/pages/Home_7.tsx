import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"
import { ParticleAnimation3 } from "../elements/ParticleConfig"

const Home_7 = () => {
    return (
        <>
            <div className="banner-section">
                <ParticleAnimation3 />
                <div className="banner-inner bnr-right">
                    <h3 className="sub-title">I’ Am <span className="text-gradient">Thomas Grady</span></h3>
                    <h2 className="title">electrician</h2>
                    <Link to="/resume-electrician" className="site-button outline button-md outline-half">Check My Cv</Link>
                    <img src={IMAGE.backgroundBg8} className="main-content" alt="" style={{ position: 'absolute', height: '95%', bottom: '0', right: '55%', zIndex: '-1' }} />
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
                        <img src={IMAGE.imagePic7} alt="" />
                        <h6 className="title">Thomas Grady</h6>
                        <span className="text-primary">electrician</span>
                    </div>
                    <Link to="/portfolio-electrician" className="site-button">Check portfolio</Link>
                </div>
            </div>
        </>
    )
}

export default Home_7