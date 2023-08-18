import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme";

import ParticleConfig from "../elements/ParticleConfig"



const Home_2 = () => {

    return (
        <>


            <div className="page-wraper text-dark">
                <div className="banner-section business-bnr wave-effect" id="WaveEffect" style={{ backgroundImage: `url(${IMAGE.backgroundBg2})`, backgroundSize: 'cover' }}>
                    <ParticleConfig />
                    <div className="banner-inner bnr-left">
                        <h3 className="sub-title">I’ Am <span className="text-gradient">Thomas Grady</span></h3>
                        <h2 className="title">Business Man</h2>
                        <Link to="resume-business-man" className="site-button outline button-md outline-half">Check My Cv</Link>
                        <img src={IMAGE.backgroundBg10} className="main-content" alt="" />
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
                            <img src={IMAGE.imagesPic2} alt="" />
                            <h6 className="title">Thomas Grady</h6>
                            <span className="text-primary">Business Man</span>
                        </div>
                        <Link to="portfolio-business-tml" className="site-button">Check portfolio</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home_2