import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"
import { useEffect, useState } from "react"

const Home_3 = () => {
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
            <div className="banner-section model-bnr" style={{ backgroundImage: `url(${IMAGE.mainSliderSlide1})`, backgroundSize: 'cover' }}>
                <ul id="kenburn">
                    <li className={`sy-active ${chanegPic === 1 ? 'show' : ''}`}><img src={IMAGE.mainSliderSlide1} alt="" /></li>
                    <li className={`sy-active ${chanegPic === 2 ? 'show' : ''}`}><img src={IMAGE.mainSliderSlide2} alt="" /></li>
                    <li className={`sy-active ${chanegPic === 3 ? 'show' : ''}`}><img src={IMAGE.mainSliderSlide3} alt="" /></li>
                </ul>
                <div className="banner-inner bnr-left">
                    <h3 className="sub-title">I’ Am <span className="text-gradient">Ella Grady</span></h3>
                    <h2 className="title">brand MODEL</h2>
                    <Link to="/resume-modal" className="site-button outline button-md outline-half">Check My Cv</Link>
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
                        <img src={IMAGE.imagePic3} alt="" />
                        <h6 className="title">ELLA GRADY</h6>
                        <span className="text-primary">brand MODEL</span>
                    </div>
                    <Link to="/portfolio-modal" className="site-button">Check portfolio</Link>
                </div>
            </div>
        </>
    )
}

export default Home_3