import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"
import { useState } from "react"

const Switcher = () => {
    const [overlay, setOverlay] = useState(false);

    return (
        <>
            <div
                onClick={() => {
                    overlay === false ? setOverlay(true) : setOverlay(false)
                }}
                className="switcher_overlay" style={{ transform: `translateX(${overlay === true ? '0' : '-100%'})` }}>
            </div>
            <div className="switcher-demo" style={{ left: `${overlay === true ? '0' : '-300px'}`, }}>
                <div className="switcher-btn-bx">
                    <Link to={'#'} className="switch-demo-btn open"
                        onClick={() => {
                            overlay === false ? setOverlay(true) : setOverlay(false)
                        }}> Check Demo </Link>
                </div>
                <div className="styleswitcher-inner">
                    <div className="switch-demo-bx">
                        <ul className="switch-demo">
                            <li> <Link to={"/"}><img src={IMAGE.demoPhotographer} alt="" /></Link></li>
                            <li> <Link to="/business-man"><img src={IMAGE.demoBusinessMan} alt="" /></Link></li>
                            <li> <Link to="/modal"> <img src={IMAGE.demoModal} alt="" /> </Link></li>
                            <li> <Link to="/doctor"> <img src={IMAGE.demoDoctor} alt="" /> </Link></li>
                            <li> <Link to="/security"><img src={IMAGE.demoSecurity} alt="" /> </Link></li>
                            <li> <Link to="/health-coach"><img src={IMAGE.demoHealthCoach} alt="" /> </Link></li>
                            <li> <Link to="/electrician"><img src={IMAGE.demoelectrician} alt="" /> </Link></li>
                            <li> <Link to="/blogger"><img src={IMAGE.demoblogger} alt="" /> </Link></li>
                            <li> <Link to="/web-developer"><img src={IMAGE.demodeveloper} alt="" /> </Link></li>
                            <li> <Link to="/swimmer"><img src={IMAGE.demoswimmer} alt="" /> </Link></li>
                            <li> <Link to="/dance-trainer"><img src={IMAGE.demoDanceTrainer} alt="" /> </Link></li>
                            <li> <Link to="/news-anchor"><img src={IMAGE.demoNewsAnchor} alt="" /> </Link></li>
                            <li> <Link to="/youtube"><img src={IMAGE.demoyoutube} alt="" /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* swichers */}
        </>
    )
}

export default Switcher