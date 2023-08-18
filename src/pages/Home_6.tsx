import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"
import { useEffect, useState } from "react";

const Home_6 = () => {
    const [chanegPic, setChangePic] = useState(1);
    const ChangeImages = () => {

        setInterval(() => {
            setChangePic(chanegPic + 1)
        }, 6000);
        if (chanegPic == 4) {
            setChangePic(1)
        }
    }

    useEffect(() => {
        ChangeImages()
    })
    return (
        <>
            <div className="page-wraper">
                <div className="banner-section gym-bnr" style={{ backgroundImage: `url(${IMAGE.backgroundBg5})`, backgroundSize: 'cover' }}>
                    <ul id="kenburn">
                        <li className={`sy-active ${chanegPic === 1 ? 'show' : ''}`}><img src={IMAGE.backgroundBg5} alt="" /></li>
                        <li className={`sy-active ${chanegPic === 2 ? 'show' : ''}`}><img src={IMAGE.backgroundBg6} alt="" /></li>
                        <li className={`sy-active ${chanegPic === 3 ? 'show' : ''}`}><img src={IMAGE.backgroundBg7} alt="" /></li>
                    </ul>
                    <div className="banner-inner bnr-right">
                        <h3 className="sub-title">I’ Am <span className="text-gradient">Thomas Grady</span></h3>
                        <h2 className="title">Health coach</h2>
                        <Link to="/resume-health-coach" className="site-button outline button-md outline-half">Check My Cv</Link>
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
                            <img src={IMAGE.imagePic6} alt="" />
                            <h6 className="title">Thomas Grady</h6>
                            <span className="text-primary">Health coach</span>
                        </div>
                        <Link to="/portfolio-health-coach" className="site-button">Check portfolio</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home_6