import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"

const Home_5 = () => {
    return (
        <>
            <div className="page-wraper">
                <div className="banner-section security-bnr">
                    <video src={IMAGE.video} autoPlay loop id="video-background" muted>
                        {/* <source src="" type="video/mp4"> */}
                    </video>
                    <div className="banner-inner bnr-left">
                        <h3 className="sub-title">I’ Am <span className="text-gradient">Thomas Grady</span></h3>
                        <h2 className="title">security officer</h2>
                        <Link to="/resume-security" className="site-button outline button-md outline-half">Check My Cv</Link>
                        <img src={IMAGE.backgroundBg4} className="main-content" alt="" style={{position:'absolute'}} />
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
                            <img src={IMAGE.imagePic5} alt="" />
                            <h6 className="title">Thomas Grady</h6>
                            <span className="text-primary">security officer</span>
                        </div>
                        <Link to="/portfolio-security" className="site-button">Check portfolio</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home_5