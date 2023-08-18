import { useState } from 'react'
import ContectUs from '../elements/ContectUs'
import { Link } from 'react-router-dom'
import { IMAGE } from '../constent/theme'
import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


const imageGallery = [
    { img: IMAGE.gallerySwimmerPic1, categery: 'Creative' },
    { img: IMAGE.gallerySwimmerPic2, categery: 'Design' },
    { img: IMAGE.gallerySwimmerPic3, categery: 'Photography' },
    { img: IMAGE.gallerySwimmerPic4, categery: 'Design' },
    { img: IMAGE.gallerySwimmerPic5, categery: 'Photography' },
    { img: IMAGE.gallerySwimmerPic6, categery: 'Design' },
    { img: IMAGE.gallerySwimmerPic7, categery: 'Photography' },
    { img: IMAGE.gallerySwimmerPic8, categery: 'Design' },
    { img: IMAGE.gallerySwimmerPic9, categery: 'Photography' },
]
const Portfolio_10 = () => {

    const [items, setItems] = useState(imageGallery);
    const [addActive, setActive] = useState('All');
    const imageFilterBtn = (action: string) => {
        let upadateItems = imageGallery.filter((ele) => {
            return ele.categery === action
        });
        setActive(action)
        setItems(upadateItems);
    }

    return (
        <>
            <div className="page-wraper">
                <ContectUs title={'Portfolio'} />
                <div className="content-body">
                    <div className="content-body-inner">
                        <div className="section-full">
                            <div className="section-head m-b20">
                                <h2 className="title text-uppercase">Some of My  <span className="text-gradient">Creative Works</span></h2>
                            </div>
                            <div className="site-filters clearfix">
                                <ul className="filters" data-toggle="buttons">
                                    <li className={`btn ${addActive === 'All' ? 'active' : ''}`}>
                                        <Link onClick={() => { setItems(imageGallery); setActive('All') }} to={'#'} className="site-button-link"><span>All</span></Link>
                                    </li>
                                    <li className={`btn ${addActive === 'Design' ? 'active' : ''}`}>
                                        <Link onClick={() => { imageFilterBtn('Design') }} to={'#'} className="site-button-link"><span>Design</span></Link>
                                    </li>
                                    <li className={`btn ${addActive === 'Photography' ? 'active' : ''}`}>
                                        <Link onClick={() => { imageFilterBtn('Photography') }} to={'#'} className="site-button-link"><span>Photography</span></Link>
                                    </li>
                                    <li className={`btn ${addActive === 'Creative' ? 'active' : ''}`}>
                                        <Link onClick={() => { imageFilterBtn('Creative') }} to={'#'} className="site-button-link"><span>Creative</span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="clearfix">
                                 <LightGallery
                                    speed={500}
                                    plugins={[lgThumbnail, lgZoom]}
                                    elementClassNames='dlab-gallery-listing gallery lightgallery row sp40'
                                >
                                    {items.map((item, index) => (
                                        <Link to={item.img} className="card-container col-xl-4 col-lg-6 col-md-6 col-sm-6 development wow fadeInLeft" key={index}>
                                            <div className="dlab-box dlab-gallery-box">
                                                <div className="dlab-media">
                                                    <img src={item.img} alt="" />
                                                    <span className="check-km" title="Design">
                                                        <i className="la la-plus"></i>
                                                    </span>
                                                </div>
                                                <div className="dlab-info">
                                                    <h4 className="title">MOCKUP COLLECTION</h4>
                                                    <span>DESIGN</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </LightGallery>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Portfolio_10