import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"
import RelatedBlogs from "../elements/RelatedBlogs"
import RightContaint from "../elements/RightContaint"

interface Propsfile {
    title: string
}

const Home_14 = (props: Propsfile) => {
    return (
        <>
            <div className="page-wraper">
                <div className="dlab-bnr-inr dlab-bnr-inr-sm style-2 text-center overlay-black-middle" style={{ backgroundImage: `url(${IMAGE.backgroundBg13})` }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry align-m text-center">
                            <h1 className="text-white">{props.title}</h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><Link to="/">Home</Link></li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-body content-body-full">
                    <div className="section-full content-inner bg-gray">
                        <div className="container">
                            <div className="row">
                                <Home_14LeftContent />
                                <RightContaint />
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="site-footer style-1">
                    <div className="footer-bottom text-center">
                        <div className="container">
                            <div className="ft-inner">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <span className="copyright-text">Copyright © 2023 <Link to="https://dexignlab.com/" target="_blank">Dexignlab</Link>. All rights reserved.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}


export const Home_14LeftContent = () => {
    return (
        <>
            <div className="col-lg-8">
                <div className="blog-post blog-single">
                    <div className="dlab-post-meta">
                        <ul>
                            <li className="post-date"><i className="las la-calendar"></i> January 12, 2023</li>
                            <li className="post-author"><i className="las la-user"></i> By <Link to="#">Sarah Albert</Link></li>
                            <li className="post-view"><Link to="#"><i className="ti-eye"></i> <span> 259 </span></Link></li>
                            <li className="post-category">
                                <i className="ti-tag m-r10"></i>
                                <Link to="/">Fashion</Link>,
                                <Link to="/">Mix</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dlab-post-title">
                        <h3 className="post-title m-t0">Blog Developer Is So Famous, But Why?</h3>
                    </div>
                    <div className="dlab-post-media">
                        <img src={IMAGE.blogGridSinglePic1} alt="" />
                    </div>
                    <div className="dlab-post-text">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting  printer Link galley Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen  It has urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen It has urvived not only five centuries, but also the leap into electronic typesetting.</p>
                        <blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Has been the industry's standard text ever since the 1500s, when an unknown printer took Link galley.</blockquote>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen It has urvived not only five centuries, but also the leap into electronic typesetting.</p>
                        <h5>Completely Responsive</h5>
                        <img className="alignleft" width="300" src={IMAGE.blogGridPic4} alt="" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. It has survived not only        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasefive centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                        <div className="dlab-divider bg-gray-dark"></div>
                        <img className="alignright" width="300" src={IMAGE.blogGridPic1} alt="" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                    </div>
                    <div className="dlab-post-tags clear">
                        <div className="post-tags">
                            <Link to="#">Child </Link>
                            <Link to="#">Eduction </Link>
                            <Link to="#">Money </Link>
                            <Link to="#">Resturent </Link>
                        </div>
                        <ul className="dlab-social">
                            <li><Link target="_blank" to="https://www.facebook.com" className="fa fa-facebook-f"></Link></li>
                            <li><Link target="_blank" to="https://www.twitter.com" className="fa fa-twitter"></Link></li>
                            <li><Link target="_blank" to="https://www.linkedin.com" className="fa fa-linkedin"></Link></li>
                            <li><Link target="_blank" to="https://www.instagram.com" className="fa fa-instagram"></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="author-box blog-user m-b60">
                    <div className="author-profile-info">
                        <div className="author-profile-pic">
                            <img src={IMAGE.blogGridPic4} alt="Profile Pic" />
                        </div>
                        <div className="author-profile-content">
                            <h6>Sarah Albert</h6>
                            <p>Nullam lacinia mauris orci, ac auctor nulla eleifend sit amet. Ut in tempor ipsum. Sed aliquam diam massa, ac ullamcorper odio pretium at.</p>
                            <ul className="list-inline m-b0">
                                <li><Link to="https://www.linkedin.com" target="_blank" className="btn-link"><i className="fa fa-linkedin"></i></Link></li>
                                <li><Link to="https://www.facebook.com" target="_blank" className="btn-link"><i className="fa fa-facebook-f"></i></Link></li>
                                <li><Link to="https://www.twitter.com" target="_blank" className="btn-link"><i className="fa fa-twitter"></i></Link></li>
                                <li><Link to="https://www.youtube.com" target="_blank" className="btn-link"><i className="fa fa-youtube"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <RelatedBlogs />
            </div>
        </>
    )
}



export default Home_14