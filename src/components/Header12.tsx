import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"
import { useEffect, useState } from "react";

const Header12 = () => {
    const [addActive, setActive] = useState(false);
    const [header, setHeader] = useState(false);
    const [path, setPath] = useState('/news-anchor');
    const [logo, setLogo] = useState(IMAGE.logo2)
    window.onscroll = () => {
        let scrollValue = window.scrollY;
        scrollValue > 100 ? setHeader(true) : setHeader(false);
    }
    useEffect(() => {
        setInterval(() => {
            setPath(window.location.pathname);
        }, 0.5)
        if (window.location.pathname !== '/news-anchor') {
            setLogo(IMAGE.logoBlack2)
        } else {
            setLogo(IMAGE.logo2)
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
                                <Link to="/news-anchor"><img src={logo} alt="" /></Link>
                            </div>
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <ul>
                                        <li><Link to="/contact-us-news-anchor"><span>Contact us?</span></Link></li>
                                        <li onClick={() => {
                                            addActive === false ? setActive(true) : setActive(false)
                                        }}
                                        ><Link to={'#'} className={`menu-btn ${addActive === true ? 'active' : ''}`}><span>Menu</span><div className="menu"><span></span><span></span><span></span></div></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`header-nav icon-menu ${addActive === true ? 'active' : ''}`}>
                                <ul className="nav navbar-nav">
                                    <li onClick={pathBtn} className={`${path === '/news-anchor' && 'active'}`}><Link to="news-anchor"><i className="ti-home"></i></Link></li>
                                    <li onClick={pathBtn} className={`${path === '/about-us-news-anchor' && 'active'}`}><Link to="about-us-news-anchor"><i className="ti-info-alt"></i></Link></li>
                                    <li onClick={pathBtn} className={`${path === '/resume-news-anchor' && 'active'}`}><Link to="resume-news-anchor"><i className="ti-user"></i></Link></li>
                                    <li onClick={pathBtn} className={`${path === '/portfolio-news-anchor' && 'active'}`}><Link to="portfolio-news-anchor"><i className="ti-layout-grid2"></i></Link></li>
                                    <li onClick={pathBtn} className={`${path === '/contact-us-news-anchor' && 'active'}`}><Link to="contact-us-news-anchor"><i className="ti-headphone-alt"></i></Link></li>
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

export default Header12