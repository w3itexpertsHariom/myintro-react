import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"
import { ParticleAnimation5 } from "../elements/ParticleConfig"

const Home_11 = () => {
    return (
        <>
            <div className="banner-section raincanvas" style={{ backgroundImage: `url(${IMAGE.backgroundBg11})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <ParticleAnimation5 />
                <div className="rainbox">
                    <canvas className="rain-storm" id="canvas1"></canvas>
                    <canvas className="rain-storm" id="canvas2"></canvas>
                    <canvas className="rain-storm" id="canvas3"></canvas>
                </div>
                <div className="banner-inner bnr-left">
                    <h3 className="sub-title">I’ Am <span className="text-gradient">Ella Grady</span></h3>
                    <h2 className="title">Dancer trainer</h2>
                    <Link to="/resume-dance-trainer" className="site-button outline button-md outline-half">Check My Cv</Link>
                </div>
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
                    <img src={IMAGE.imagePic11} alt="" />
                    <h6 className="title">Ella Grady</h6>
                    <span className="text-primary">DANCER TRAINER</span>
                </div>
                <Link to="/portfolio-dance-trainer" className="site-button">Check portfolio</Link>
            </div>
        </>
    )
}

export default Home_11