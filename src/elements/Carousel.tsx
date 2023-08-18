import { IMAGE } from '../constent/theme'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { useRef } from 'react'


const userData = [
    { img: IMAGE.testimonialPic2, },
    { img: IMAGE.testimonialPic1, },
    { img: IMAGE.testimonialPic2, },

    { img: IMAGE.testimonialPic3, },


]
const Carousel = () => {
    const paginationRef = useRef(null)
    return (
        <>
            <div className="testimonial-one">
                <Swiper className="item"
                    slidesPerView={2}
                    spaceBetween={40}
                    speed={2000}
                    modules={[Autoplay, Pagination]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                    }}
                    breakpoints={{
                        1200: {
                            slidesPerView: 2
                        },
                        300: {
                            slidesPerView: 1
                        }
                    }}>

                    {userData.map((item, index) => (
                        <SwiperSlide className="testimonial-1 wow fadeInUp" key={index} >
                            <div className="testimonial-text">
                                <i className="ti-quote-left quote-icon text-gradient"></i>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.</p>
                            </div>
                            <div className="testimonial-detail clearfix">
                                <div className="testimonial-pic radius"><img src={item.img} alt="" /></div>
                                <strong className="testimonial-name">Steve Tylor</strong> <span className="testimonial-position">photographer</span>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-pagination" ref={paginationRef}></div>
                </Swiper>
            </div>
        </>
    )
}

export default Carousel