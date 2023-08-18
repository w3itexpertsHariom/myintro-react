import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"
// import WaterWave from "react-water-wave";

// export interface HiScreenInterface {
//     children?: React.ReactNode;
// }

const Home_10 = () => {
    return (
        <>
            <div className="banner-section ripples-water" style={{ backgroundImage: `url(${IMAGE.backgroundBg9Two})`, backgroundSize: 'cover' }}
                // imageUrl={IMAGE.backgroundBg9Two}
            >
                {/* {() => ( */}
                    <>
                        <canvas id="canvas3"></canvas>
                        <div className="banner-inner bnr-left">
                            <h3 className="sub-title">I’ Am <span className="text-gradient">Ella Grady</span></h3>
                            <h2 className="title">swimmer</h2>
                            <Link to="/resume-swimmer" className="site-button outline button-md outline-half">Check My Cv</Link>
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
                                <img src={IMAGE.imagePic10} alt="" />
                                <h6 className="title">Ella Grady</h6>
                                <span className="text-primary">swimmer</span>
                            </div>
                            <Link to="portfolio-swimmer" className="site-button">Check portfolio</Link>
                        </div>
                    </>
                {/* )} */}
            </div>



        </>
    )
}
// Home_10.defaultProps = {
//     children: null
// };

export default Home_10