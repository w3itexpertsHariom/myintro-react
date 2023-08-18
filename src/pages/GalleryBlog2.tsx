import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"
import ContectUs from "../elements/ContectUs"


const articleGallery = [
    { img: IMAGE.blogGridPic1, date: 'february 23, 2023', title: 'Creativity Is More Than' },
    { img: IMAGE.blogGridPic2, date: 'february 22, 2023', title: 'The InfluiCence Of Blog' },
    { img: IMAGE.blogGridPic3, date: 'february 21, 2023', title: 'Seven Easy Rules' },
    { img: IMAGE.blogGridPic4, date: 'february 20, 2023', title: '10 Quick Tips For Blog' },
    { img: IMAGE.blogGridPic5, date: 'february 19, 2023', title: 'The Ultimate ' },
    { img: IMAGE.blogGridPic6, date: 'february 18, 2023', title: '5 Reasons Why People Like' },
]

const GalleryBlog2 = () => {
    return (
        <>
            <div className="page-wraper">
                <ContectUs title={'blog'} />
                <div className="content-body">
                    <div className="content-body-inner">
                        <div className="section-full">
                            <div className="section-head m-b50">
                                <h2 className="title text-uppercase">Get to Know Latest  <span className="text-gradient">Articles</span></h2>
                            </div>
                            <div className="row">
                                {articleGallery.map((item, index) => (
                                    <div className="col-12 wow fadeInLeft" key={index}>
                                        <div className="blog-post blog-list">
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
                                                    <h4 className="post-title"><Link to="/blog-single">{item.title}</Link></h4>
                                                </div>
                                                <div className="dlab-post-text">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</p>
                                                    <Link to="/blog-single" className="site-button button-gradient button-md radius-no">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryBlog2