import { IMAGE } from '../constent/theme'
import AboutInfo from '../components/AboutInfo'
import MyServices from '../components/MyServices'
import Counter from '../components/Counter'
import Testimonial from '../components/Testimonial'
import OurClient from '../components/OurClient'
import ContectUs from '../elements/ContectUs'

const About = () => {
    return (
        <>
            <div className="page-wraper">
                <ContectUs title={'About us'} />
                <div className="content-body">
                    <div className="content-body-inner">
                        <AboutInfo image={IMAGE.aboutPic1} />
                        <MyServices text1={'Portrait Photographer'} text2={'Engagement photography'} text3={'Commercial photography'} text4={'Personal photography'} />
                        <Counter />
                        <Testimonial />
                        <div className="section-full content-inner-1">
                            <div className="section-head">
                                <h2 className="title text-uppercase">our Clients</h2>
                            </div>
                            <OurClient />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About