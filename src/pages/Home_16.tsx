import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"
import RightContaint from "../elements/RightContaint"

const articleGallery = [
    { img: IMAGE.blogGridPic1, date: 'february 23, 2023', title: 'Creativity Is More Than' },
    { img: IMAGE.blogGridPic2, date: 'february 22, 2023', title: 'The InfluiCence Of Blog' },
    { img: IMAGE.blogGridPic3, date: 'february 21, 2023', title: 'Seven Easy Rules' },
    { img: IMAGE.blogGridPic4, date: 'february 20, 2023', title: '10 Quick Tips For Blog' },
    { img: IMAGE.blogGridPic5, date: 'february 19, 2023', title: 'The Ultimate ' },
    { img: IMAGE.blogGridPic6, date: 'february 18, 2023', title: '5 Reasons Why People Like' },
]
const Home_16 = () => {
    
    return (
        <>
            <div className="dlab-bnr-inr dlab-bnr-inr-sm style-2 text-center overlay-black-middle" style={{ backgroundImage: `url(${IMAGE.backgroundBg13})` }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry align-m text-center">
                        <h1 className="text-white">Blog List Sidebar</h1>
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
                            <div className="col-lg-8">
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
                            <RightContaint />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home_16