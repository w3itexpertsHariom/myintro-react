import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { IMAGE } from '../constent/theme';

const Header16 = () => {
    const [logo, setLogo] = useState(IMAGE.logo)
    const [addActive, setActive] = useState(false);
    const [header, setHeader] = useState(false);
    const [path, setPath] = useState('/');
    window.onscroll = () => {
        let scrollValue = window.scrollY;
        scrollValue > 100 ? setHeader(true) : setHeader(false);
    }

    useEffect(() => {
        if (window.location.pathname !== '/') {
            setLogo(IMAGE.logoBlack)
        } else {
            setLogo(IMAGE.logo)
        }
        setInterval(() => {
            setPath(window.location.pathname);
        }, 0.5)
    })

    const pathBtn = () => {
        setPath(window.location.pathname);
    }




    return (
        <>
            <div className="page-wraper">
                <header className="site-header header-transparent zIndex">
                    <div className={`sticky-header main-bar-wraper navbar-expand-xl ${header === true ? 'is-fixed' : ''}`}>
                        <div className="main-bar clearfix">
                            <div className="container-fluid clearfix">
                                <div className="logo-header">
                                    <Link to="/"><img src={logo} alt="" /></Link>
                                </div>
                                <div className="extra-nav">
                                    <div className="extra-cell">
                                        <ul>
                                            <li><Link to="contact-us-photographer"><span>Contact us?</span></Link></li>
                                            <li onClick={() => {
                                                addActive === false ? setActive(true) : setActive(false)
                                            }}><Link to="#" className={`menu-btn ${addActive === true ? 'active' : ''}`}><span>Menu</span><div className="menu"><span></span><span></span><span></span></div></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={`header-nav icon-menu ${addActive === true ? 'active' : ''}`}>
                                    <ul className="nav navbar-nav">
                                        <li onClick={pathBtn} className={`${path === '/' && 'active'}`}><Link to="/"><i className="ti-home"></i></Link></li>
                                        <li onClick={pathBtn} className={`${path === '/about-us-photographer' && 'active'}`}><Link to="/about-us-photographer" ><i className="ti-info-alt"></i></Link></li>
                                        <li onClick={pathBtn} className={`${path === '/resume-photographer' && 'active'}`}><Link to="/resume-photographer" ><i className="ti-user"></i></Link></li>
                                        <li onClick={pathBtn} className={`${path === '/portfolio-photographer' && 'active'}`}><Link to="/portfolio-photographer" ><i className="ti-layout-grid2"></i></Link></li>
                                        <li onClick={pathBtn} className={`${path === '/contact-us-photographer' && 'active'}`}><Link to="/contact-us-photographer" ><i className="ti-headphone-alt"></i></Link></li>
                                        <li onClick={pathBtn} className={`${path === '/blog-single' && 'active'}`}><Link to="/blog-single" ><i className="ti-gallery"></i></Link></li>
                                        <li onClick={pathBtn} className={`${path === '/blog-list-sidebar' && 'active'}`}><Link to="/blog-list-sidebar" ><i className="ti-list"></i></Link></li>                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header16