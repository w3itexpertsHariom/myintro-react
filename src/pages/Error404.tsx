import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"

const Error404 = () => {
    return (
        <>

            <div className="page-wraper">
                <div className="error-page raincanvas" style={{ backgroundImage: `url(${IMAGE.backgroundBg13})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="rainbox">
                        <canvas className="rain-storm" id="canvas1"></canvas>
                        <canvas className="rain-storm" id="canvas2"></canvas>
                        <canvas className="rain-storm" id="canvas3"></canvas>
                    </div>
                    <div className="error-inner text-center">
                        <div className="dz_error" data-text="404">404</div>
                        <h2 className="error-head">We are sorry. But the page you are looking for cannot be found.</h2>
                        <Link to="/" className="site-button button-gradient button-md radius-no">Back To Homepage</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Error404