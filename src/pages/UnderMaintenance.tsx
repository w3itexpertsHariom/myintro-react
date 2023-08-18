import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"

const UnderMaintenance = () => {
    return (
        <>
            <div className="page-wraper">
                <div className="under-construct" style={{ backgroundImage: `url(${IMAGE.underConstructPic1})`, backgroundSize: '50%', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom left' }}>
                    <div className="inner-box">
                        <img className="img-center" src={IMAGE.underConstructPic2} alt="Under Construct" />
                        <div className="logo-header">
                            <Link to="/" className="dark-logo" title="MyIntro">
                                <img src={IMAGE.logoBlack} alt="MyIntro" />
                            </Link>
                        </div>
                        <div className="dlab-content">
                            <h2 className="title">Site Is Down <br />For <span className="text-primary">Maintenance</span></h2>
                            <p>This is the Technical Problems Page. <br />Or Any Other Page.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnderMaintenance