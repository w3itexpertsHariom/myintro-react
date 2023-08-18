import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"
import ContectUs from "../elements/ContectUs"


const blogGridGallery = [
  { img: IMAGE.blogGridPic1, date: 'february 23, 2023', title: 'Creativity Is More Than' },
  { img: IMAGE.blogGridPic2, date: 'february 22, 2023', title: 'The InfluiCence Of Blog' },
  { img: IMAGE.blogGridPic3, date: 'february 21, 2023', title: 'Seven Easy Rules' },
  { img: IMAGE.blogGridPic4, date: 'february 20, 2023', title: '10 Quick Tips For Blog' },
  { img: IMAGE.blogGridPic5, date: 'february 19, 2023', title: 'The Ultimate ' },
  { img: IMAGE.blogGridPic6, date: 'february 18, 2023', title: '5 Reasons Why People Like' },
  { img: IMAGE.blogGridPic7, date: 'february 17, 2023', title: 'The Truth About Devloper' },
  { img: IMAGE.blogGridPic8, date: 'february 16, 2023', title: 'Own Blog Devloper For Free' },
  { img: IMAGE.blogGridPic9, date: 'february 15, 2023', title: '10 Common Myths About' },
]
const GalleryBlog = () => {
  return (
    <>
      <div className="page-wraper">
        <ContectUs title={'BLOG'} />
        <div className="content-body">
          <div className="content-body-inner">
            <div className="section-full">
              <div className="section-head m-b50">
                <h2 className="title text-uppercase">Get to Know Latest  <span className="text-gradient">Articles</span></h2>
              </div>
              <div className="row">
                {blogGridGallery.map((item, index) => (
                  <div className="col-xl-4 col-lg-6 col-sm-6 wow fadeInLeft" key={index}>
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
                          <h5 className="post-title"><Link to="/blog-single">{item.title}</Link></h5>
                        </div>
                        <div className="dlab-post-text">
                          <p>Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut.</p>
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

export default GalleryBlog