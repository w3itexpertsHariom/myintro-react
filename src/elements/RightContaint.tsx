import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"
import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';




const galleryBlog = [
    { img: IMAGE.galleryCommanPic1 },
    { img: IMAGE.galleryCommanPic2 },
    { img: IMAGE.galleryCommanPic3 },
    { img: IMAGE.galleryCommanPic4 },
    { img: IMAGE.galleryCommanPic5 },
    { img: IMAGE.galleryCommanPic6 },
]
const postImage = [
    { Images: IMAGE.recentBlogPic1, date: '7 March, 2023', detail: 'Aliqua sodales vestibulum risus nterdum malesuad' },
    { Images: IMAGE.recentBlogPic2, date: '6 March, 2023', detail: 'How To Make Money From The agency Phenomenon' },
    { Images: IMAGE.recentBlogPic3, date: '5 March, 2023', detail: 'The 8 Biggest Agency Mistakes You Can Easily' },
]
const RightContaint = () => {
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {    
        event.preventDefault();    
    }
    return (
        <>
            <div className="col-xl-4 col-lg-4 zIndex2">
                <aside className="side-bar sticky-top right">
                    <div className="widget">
                        <div className="widget-title">
                            <h4 className="title">Search</h4>
                        </div>
                        <div className="search-bx style-1">
                            <form  onSubmit={submitForm}>
                                <div className="input-group">
                                    <input name="text" className="form-control" placeholder="Search Here..." type="text" />
                                    <span className="input-group-btn">
                                        <button type="submit" className="btn btn-primary sharp radius-no"><i className="la la-search scale3"></i></button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="widget style-1 widget_categories">
                        <div className="widget-title">
                            <h4 className="title">Category</h4>
                        </div>
                        <ul>
                            <li className="cat-item"><Link to="#">Software</Link></li>
                            <li className="cat-item"><Link to="#">Analysis</Link></li>
                            <li className="cat-item"><Link to="#">Cryptocurrency</Link></li>
                            <li className="cat-item"><Link to="#">Technology</Link></li>
                            <li className="cat-item"><Link to="#">Mobile App</Link></li>
                            <li className="cat-item"><Link to="#">Development</Link></li>
                        </ul>
                    </div>

                    <div className="widget style-1 widget_gallery gallery-grid-3">
                        <div className="widget-title">
                            <h4 className="title">Gallery</h4>
                        </div>
                        <ul id="lightgallery" className="lightgallery">

                            <LightGallery
                                speed={500}
                                plugins={[lgThumbnail, lgZoom]}
                                elementClassNames="LIGHTGALLERY"
                            >

                                {galleryBlog.map((item, index) => {
                                    return (                                        
                                        <Link to={item.img} key={index}>
                                            <div className="dlab-post-thum dlab-img-effect" key={index}>
                                                <span className="check-km" title="Image 1 Title will come here">
                                                    <img src={item.img} alt="" />
                                                </span>
                                            </div>
                                        </Link>
                                        
                                    )
                                })}
                            </LightGallery>
                        </ul>
                    </div>


                    <div className="widget style-1 recent-posts-entry">
                        <div className="widget-title">
                            <h4 className="title">Recent Post</h4>
                        </div>
                        <div className="widget-post-bx">
                            {postImage.map((item, ind) => (
                                <div className="widget-post clearfix" key={ind}>
                                    <div className="dz-media">
                                        <img src={item.Images} alt="" />
                                    </div>
                                    <div className="dz-info">
                                        <div className="dz-meta">
                                            <ul>
                                                <li className="post-date">{item.date}</li>
                                            </ul>
                                        </div>
                                        <h6 className="title"><Link to="/blog-single">{item.detail}</Link></h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="widget style-1 widget_tag_cloud">
                        <div className="widget-title">
                            <h4 className="title">Popular Tags</h4>
                        </div>
                        <div className="tagcloud">
                            <Link to={'#'}>Mock-Ups</Link>
                            <Link to={'#'}>UI</Link>
                            <Link to={'#'}>Websites</Link>
                            <Link to={'#'}>PSD Templates</Link>
                            <Link to={'#'}>Branding</Link>
                            <Link to={'#'}>WordPress</Link>
                            <Link to={'#'}>Graphic Design</Link>
                            <Link to={'#'}>UI Kit</Link>
                            <Link to={'#'}>Development</Link>
                        </div>
                    </div>

                </aside >
            </div >
        </>
    )
}

export default RightContaint