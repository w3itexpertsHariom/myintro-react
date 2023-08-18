import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"
import Particle_2 from "../elements/Particle_2"

const Home_4 = () => {
    return (
        <>
            <div className="banner-section doctor-bnr" id="particles-js" style={{ backgroundImage: `url(${IMAGE.backgoundBg3})` }}>
                <Particle_2 />
                <div className="banner-inner bnr-left">
                    <h3 className="sub-title">I’ Am <span className="text-gradient">Ella Grady</span></h3>
                    <h2 className="title">health Care</h2>
                    <Link to="/resume-doctor" className="site-button outline button-md outline-half">Check My Cv</Link>
                    <img src={IMAGE.backgoundDoctoePic1} className="main-content" alt="" style={{ position: 'absolute' }} />
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
                        <img src={IMAGE.imagePic4} alt="" />
                        <h6 className="title">ella grady</h6>
                        <span className="text-primary">health care</span>
                    </div>
                    <Link to="portfolio-doctor" className="site-button">Check portfolio</Link>
                </div>
            </div>
        </>
    )
}

export default Home_4