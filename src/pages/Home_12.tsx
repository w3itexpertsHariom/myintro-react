import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"

const Home_12 = () => {
    return (
        <>
            <div className="banner-section fullscreen news-bnr" style={{ backgroundImage: `url(${IMAGE.backgroundBg10Two})`, backgroundSize: 'cover' }}>
                <div className="video">
                    <div className="wrapper">
                        <iframe id="video-iframe" src="https://player.vimeo.com/video/145645694?autoplay=1&loop=1&autopause=0" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                    </div>
                </div>

                <div className="banner-inner bnr-left">
                    <h3 className="sub-title">I’ Am <span className="text-gradient">Thomas Grady</span></h3>
                    <h2 className="title">News Anchor</h2>
                    <Link to="/resume-news-anchor" className="site-button outline button-md white outline-half">Check My Cv</Link>
                    <img src={IMAGE.backGroundBg5Two} className="main-content" alt="" />
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
                        <img src={IMAGE.imagePic12} alt="" />
                        <h6 className="title">Thomas Grady</h6>
                        <span className="text-primary">News Anchor</span>
                    </div>
                    <Link to="/portfolio-news-anchor" className="site-button">Check portfolio</Link>
                </div>
            </div>
        </>
    )
}

export default Home_12