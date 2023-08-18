import { Link } from "react-router-dom"
import ContectUs from "../elements/ContectUs"
import { RelatedBlogsComments } from "../elements/RelatedBlogs"
import { IMAGE } from "../constent/theme"



const relatedBlogImages = [
    { img: IMAGE.blogGridPic1, postTitle: 'Creativity Is More Than', date: "february 23, 2023" },
    { img: IMAGE.blogGridPic2, postTitle: 'The Influence Of Blog', date: "february 22, 2023 " },
    { img: IMAGE.blogGridPic3, postTitle: 'Seven Easy Rules', date: "february 21, 2023 " },
];
const Home_15 = () => {
    return (
        <>
            <ContectUs title={'BLOG SINGLE'} />
            <div className="content-body">
                <div className="content-body-inner">
                    <div className="section-full">
                        <div className="blog-post blog-single">
                            <div className="dlab-post-meta">
                                <ul>
                                    <li className="post-date"><i className="las la-calendar"></i> January 12, 2023</li>
                                    <li className="post-author"><i className="las la-user"></i> By <Link to="#">Sarah Albert</Link></li>
                                    <li className="post-view"><Link to="#"><i className="ti-eye"></i> <span> 259 </span></Link></li>
                                    <li className="post-category">
                                        <i className="ti-tag m-r10"></i>
                                        <Link to="#">Fashion</Link>,
                                        <Link to="#">Mix</Link>
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

                        <h5 className="widget-title">Related Blogs</h5>
                        <div className="row">
                            {
                                relatedBlogImages.map((item, index) => (
                                    <div className="col-xl-4 col-lg-6 col-sm-6" key={index}>
                                        <div className="blog-post">
                                            <div className="dlab-post-media">
                                                <Link to="/blog-single"><img src={item.img} alt="" /></Link>
                                            </div>
                                            <div className="dlab-post-info">
                                                <div className="dlab-post-meta">
                                                    <ul>
                                                        <li className="post-date">{item.date}</li>
                                                    </ul>
                                                </div>
                                                <div className="dlab-post-title">
                                                    <h5 className="post-title"><Link to="/blog-single"></Link>{item.postTitle}</h5>
                                                </div>
                                                <div className="dlab-post-text">
                                                    <p>Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <RelatedBlogsComments />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home_15