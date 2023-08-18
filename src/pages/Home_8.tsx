import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"
import { ParticleAnimation4 } from "../elements/ParticleConfig"

const Home_8 = () => {
    return (
        <>
            <div className="page-wraper text-dark">
                <div className="banner-section blogger-bnr" id="particles-snow" style={{ backgroundImage: `url(${IMAGE.backgroundBg8two})`, backgroundSize: 'cover' }}>
                    <ParticleAnimation4 />
                    <div className="banner-inner bnr-left">
                        <h3 className="sub-title">I’ Am <span className="text-gradient">ella grady</span></h3>
                        <h2 className="title">Blogger</h2>
                        <Link to="/resume-blogger" className="site-button outline button-md outline-half">Check My Cv</Link>
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
                            <img src={IMAGE.imagePic8} alt="" />
                            <h6 className="title">ella grady</h6>
                            <span className="text-primary">blogger</span>
                        </div>
                        <Link to="/portfolio-blogger" className="site-button">Check portfolio</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home_8