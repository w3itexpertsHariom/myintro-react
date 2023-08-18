import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"


const Home_9 = () => {
    return (
        <>
            <div className="banner-section coad-bnr">
                <video src={IMAGE.video2} autoPlay loop muted className="video-background" >
                </video>
                <div className="banner-inner bnr-left">
                    <h3 className="sub-title">I’ Am <span className="text-gradient">Thomas Grady</span></h3>
                    <h2 className="title">Web Developer</h2>
                    <Link to="/resume-web-developer" className="site-button outline button-md outline-half">Check My Cv</Link>
                    <img src={IMAGE.backgroundBg9} className="main-content" alt="" />
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
                        <img src={IMAGE.imagePic9} alt="" />
                        <h6 className="title">Thomas Grady</h6>
                        <span className="text-primary">Web Developer</span>
                    </div>
                    <Link to="/portfolio-web-developer" className="site-button">Check portfolio</Link>
                </div>
            </div>
        </>
    )
}

export default Home_9