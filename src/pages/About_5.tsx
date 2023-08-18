import AboutInfo from "../components/AboutInfo"
import Counter from "../components/Counter"
import MyServices from "../components/MyServices"
import OurClient from "../components/OurClient"
import Testimonial from "../components/Testimonial"
import { IMAGE } from "../constent/theme"
import ContectUs from "../elements/ContectUs"

const About_5 = () => {
  return (
    <>
      <div className="page-wraper">
        <ContectUs title={'About us'} />
        <div className="content-body">
          <div className="content-body-inner">
            <AboutInfo image={IMAGE.aboutPic5} />
            <MyServices text1={'CCTV Design House'} text2={'Fire Alarm Systems'} text3={'Home Automation'} text4={'Surveillance Cam kit'} />
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

export default About_5