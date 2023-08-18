import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"
import { useEffect, useState } from "react";

const Header6 = () => {
    const [addActive, setActive] = useState(false);
    const [header, setHeader] = useState(false);
    const [path, setPath] = useState('/health-coach');
    const [logo, setLogo] = useState(IMAGE.logo3)
    window.onscroll = () => {
        let scrollValue = window.scrollY;
        scrollValue > 100 ? setHeader(true) : setHeader(false);
    }
    useEffect(() => {
        setInterval(() => {
            setPath(window.location.pathname);
        }, 0.5)
        if (window.location.pathname !== '/health-coach') {
            setLogo(IMAGE.logoBlack3)
        } else {
            setLogo(IMAGE.logo3)
        }
    })

    const pathBtn = () => {
        setPath(window.location.pathname);
    }
    return (
        <>
            <header className="site-header header-transparent zIndex">
                <div className={`sticky-header main-bar-wraper navbar-expand-xl ${header === true ? 'is-fixed' : ''}`}>
                    <div className="main-bar clearfix">
                        <div className="container-fluid clearfix">
                            <div className="logo-header">
                                <Link to="/health-coach"><img src={logo} alt="" /></Link>
                            </div>
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <ul>
                                        <li><Link to="/contact-us-health-coach"><span>Contact us?</span></Link></li>
                                        <li onClick={() => {
                                            addActive === false ? setActive(true) : setActive(false)
                                        }}
                                        ><Link to={'#'} className={`menu-btn ${addActive === true ? 'active' : ''}`}><span>Menu</span><div className="menu"><span></span><span></span><span></span></div></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`header-nav icon-menu ${addActive === true ? 'active' : ''}`}>
                                <ul className="nav navbar-nav">
                                    <li onClick={pathBtn} className={`${path === '/health-coach' && 'active'}`}><Link to="health-coach"><i className="ti-home"></i></Link></li>
                                    <li onClick={pathBtn} className={`${path === '/about-us-health-coach' && 'active'}`}><Link to="about-us-health-coach"><i className="ti-info-alt"></i></Link></li>
                                    <li onClick={pathBtn} className={`${path === '/resume-health-coach' && 'active'}`}><Link to="resume-health-coach"><i className="ti-user"></i></Link></li>
                                    <li onClick={pathBtn} className={`${path === '/portfolio-health-coach' && 'active'}`}><Link to="portfolio-health-coach"><i className="ti-layout-grid2"></i></Link></li>
                                    <li onClick={pathBtn} className={`${path === '/contact-us-health-coach' && 'active'}`}><Link to="contact-us-health-coach"><i className="ti-headphone-alt"></i></Link></li>
                                    <li onClick={pathBtn} className={`${path === '/blog-single' && 'active'}`}><Link to="/blog-single" ><i className="ti-gallery"></i></Link></li>
                                    <li onClick={pathBtn} className={`${path === '/blog-list-sidebar' && 'active'}`}><Link to="/blog-list-sidebar" ><i className="ti-list"></i></Link></li>                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header6