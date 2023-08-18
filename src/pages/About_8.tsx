import AboutInfo from "../components/AboutInfo"
import Counter from "../components/Counter"
import MyServices from "../components/MyServices"
import OurClient from "../components/OurClient"
import Testimonial from "../components/Testimonial"
import { IMAGE } from "../constent/theme"
import ContectUs from "../elements/ContectUs"

const About_8 = () => {
    return (
        <>

            <div className="page-wraper">
                <ContectUs title={'About us'} />
                <div className="content-body">
                    <div className="content-body-inner">
                        <AboutInfo image={IMAGE.aboutPic8} />
                        <MyServices text1={'Content writing'} text2={'Networking'} text3={'Marketing '} text4={'Photo Editing'} />
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

export default About_8