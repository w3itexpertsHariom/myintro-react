import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"
import { useEffect, useState } from "react";

const Header8 = () => {
    const [addActive, setActive] = useState(false);
    const [header, setHeader] = useState(false);
    const [path, setPath] = useState('/blogger');
    window.onscroll = () => {
        let scrollValue = window.scrollY;
        scrollValue > 100 ? setHeader(true) : setHeader(false);
    }
    useEffect(() => {
        setInterval(() => {
            setPath(window.location.pathname);
        }, 0.5)
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
                                <Link to="/blogger"><img src={IMAGE.logoBlack2} alt="" /></Link>
                            </div>
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <ul>
                                        <li><Link to="/contact-us-blogger"><span style={{ color: 'black' }}>Contact us?</span></Link></li>
                                        <li style={{ color: 'white' }} onClick={() => {
                                            addActive === false ? setActive(true) : setActive(false)
                                        }}
                                        ><Link to={'#'} className={`menu-btn ${addActive === true ? 'active' : ''}`}><span>Menu</span><div className="menu"><span></span><span></span><span></span></div></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`header-nav icon-menu ${addActive === true ? 'active' : ''}`}>
                                <ul className="nav navbar-nav">
                                    <li onClick={pathBtn} className={`${path === '/blogger' && 'active'}`}><Link to="blogger"><i className="ti-home"></i></Link></li>
                                    <li onClick={pathBtn} className={`${path === '/about-us-blogger' && 'active'}`}><Link to="about-us-blogger"><i className="ti-info-alt"></i></Link></li>
                                    <li onClick={pathBtn} className={`${path === '/resume-blogger' && 'active'}`}><Link to="resume-blogger"><i className="ti-user"></i></Link></li>
                                    <li onClick={pathBtn} className={`${path === '/portfolio-blogger' && 'active'}`}><Link to="portfolio-blogger"><i className="ti-layout-grid2"></i></Link></li>
                                    <li onClick={pathBtn} className={`${path === '/contact-us-blogger' && 'active'}`}><Link to="contact-us-blogger"><i className="ti-headphone-alt"></i></Link></li>
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

export default Header8