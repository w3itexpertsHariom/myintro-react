import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"
import { useState } from "react"
const Header14 = () => {
    const [header, setHeader] = useState(false);
    const [navToggle, setNavToggle] = useState(false);
    const [open, setOpen] = useState('');
    window.onscroll = function () {
        let scrollValue = window.scrollY;
        scrollValue > 120 ? setHeader(true) : setHeader(false)
    }

    return (
        <>
            <header className="site-header mo-left header style-1 zIndex">
                <div className="top-bar">
                    <div className="container">
                        <div className="dlab-topbar-inner d-flex justify-content-between align-items-center">
                            <div className="dlab-topbar-left">
                                <ul>
                                    <li><i className="fa fa-map-marker text-primary"></i> 15/B Miranda House, New York, US</li>
                                    <li><i className="fa fa-envelope text-primary"></i> info@example.com</li>
                                </ul>
                            </div>
                            <div className="dlab-topbar-right">
                                <ul className="dlab-social">
                                    <li><Link target="_blank" to="https://www.facebook.com" className="fa fa-facebook-f"></Link></li>
                                    <li><Link target="_blank" to="https://www.twitter.com" className="fa fa-twitter"></Link></li>
                                    <li><Link target="_blank" to="https://www.linkedin.com" className="fa fa-linkedin"></Link></li>
                                    <li><Link target="_blank" to="https://www.instagram.com" className="fa fa-instagram"></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`sticky-header main-bar-wraper navbar-expand-lg ${header === true ? 'is-fixed' : ''}`} style={{ transition: 'all .5s linear' }}>
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">
                            <div className="logo-header mostion logo-dark">
                                <Link to="/"><img src={IMAGE.logoBlack} alt="" /></Link>
                            </div>
                            <button onClick={() => { navToggle === true ? setNavToggle(false) : setNavToggle(true) }}
                                className={`navbar-toggler collapsed navicon justify-content-end ${navToggle === true ? 'open' : ''}`}
                                type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <Link to="/contact-us" className="site-button button-gradient button-md radius-no">Contact Us</Link>
                                </div>
                            </div>
                            <div className={`header-nav navbar-collapse collapse justify-content-end ${navToggle === true ? 'show' : ''}`} id="navbarNavDropdown">
                                <div className="logo-header">
                                    <Link to="/"><img src="images/logo-black.png" alt="" /></Link>
                                </div>
                                <ul className="nav navbar-nav navbar" style={{ zIndex: 9999 }}>
                                    <li onClick={() => { open === '' || open === '2' || open === '3' ? setOpen('1') : setOpen('') }}
                                        className={`active sub-menu-down has-mega-menu homedemo ${open === '1' ? 'open' : ''}`}>
                                        <Link to={'#'}>Home</Link>
                                        <ul className="mega-menu">
                                            <li><Link to="/"><img src={IMAGE.demoPhotographer} alt="" /><span>Photographer</span></Link></li>
                                            <li><Link to="business-man"><img src={IMAGE.demoBusinessMan} alt="" /><span>Business Man</span></Link></li>
                                            <li><Link to="modal"><img src={IMAGE.demoModal} alt="" /><span>Modal</span></Link></li>
                                            <li><Link to="doctor"><img src={IMAGE.demoDoctor} alt="" /><span>Doctor</span></Link></li>
                                            <li><Link to="security"><img src={IMAGE.demoSecurity} alt="" /><span>Security</span></Link></li>
                                            <li><Link to="health-coach"><img src={IMAGE.demoHealthCoach} alt="" /><span>Health Coach</span></Link></li>
                                            <li><Link to="electrician"><img src={IMAGE.demoelectrician} alt="" /><span>Electrician</span></Link></li>
                                            <li><Link to="blogger"><img src={IMAGE.demoblogger} alt="" /><span>Blogger</span></Link></li>
                                            <li><Link to="web-developer"><img src={IMAGE.demodeveloper} alt="" /><span>Web Developer</span></Link></li>
                                            <li><Link to="swimmer"><img src={IMAGE.demoswimmer} alt="" /><span>Swimmer</span></Link></li>
                                            <li><Link to="dance-trainer"><img src={IMAGE.demoDanceTrainer} alt="" /><span>Dance Trainer</span></Link></li>
                                            <li><Link to="news-anchor"><img src={IMAGE.demoNewsAnchor} alt="" /><span>News Anchor</span></Link></li>
                                            <li><Link to="youtube"><img src={IMAGE.demoyoutube} alt="" /><span>Youtube</span></Link></li>
                                            <li><Link to="coming-soon"><img src={IMAGE.demoComingSoon} alt="" /><span>Coming Soon</span></Link></li>
                                            <li><Link to="error-404"><img src={IMAGE.demoError404} alt="" /><span>Error 404</span></Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="about-us-photographer">About Us</Link></li>
                                    <li><Link to="resume-photographer">Resume</Link></li>
                                    <li><Link to="portfolio-photographer">Portfolio</Link></li>
                                    <li onClick={() => { open === '' || open === '1' || open === '3' ? setOpen('2') : setOpen('') }}
                                        className={`sub-menu-down ${open === '2' ? 'open' : ''}`}><Link to="#">Pages</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="coming-soon">Coming Soon</Link></li>
                                            <li><Link to="under-maintenance">Under Construct</Link></li>
                                            <li><Link to="error-404">Error 404</Link></li>
                                        </ul>
                                    </li>
                                    <li onClick={() => { open === '' || open === '1' || open === '2' ? setOpen('3') : setOpen('') }}
                                        className={`sub-menu-down ${open === '3' ? 'open' : ''}`}><Link to="#">Blog</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="blog">Blog</Link></li>
                                            <li><Link to="blog-list">Blog List</Link></li>
                                            <li><Link to="blog-list-sidebar">Blog List Sidebar</Link></li>
                                            <li><Link to="blog-single">Blog Single</Link></li>
                                            <li><Link to="blog-single-sidebar">Blog Single Sidebar</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="dlab-social-icon">
                                    <ul>
                                        <li><Link target="_blank" to="https://www.facebook.com" className="fa fa-facebook-f"></Link></li>
                                        <li><Link target="_blank" to="https://www.twitter.com" className="fa fa-twitter"></Link></li>
                                        <li><Link target="_blank" to="https://www.linkedin.com" className="fa fa-linkedin"></Link></li>
                                        <li><Link target="_blank" to="https://www.instagram.com" className="fa fa-instagram"></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header14