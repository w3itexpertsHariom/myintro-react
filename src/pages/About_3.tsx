import AboutInfo from "../components/AboutInfo"
import Counter from "../components/Counter"
import MyServices from "../components/MyServices"
import OurClient from "../components/OurClient"
import Testimonial from "../components/Testimonial"
import { IMAGE } from "../constent/theme"
import ContectUs from "../elements/ContectUs"

const About_3 = () => {
  return (
      <>
          <div className="page-wraper">
              <ContectUs title={'About us'} />
              <div className="content-body">
                  <div className="content-body-inner">
                      <AboutInfo image={IMAGE.aboutPic3} />
                      <MyServices text1={'CAMERA WORK'} text2={'POST PRODUCTION'} text3={'CINEMATOGRAPHY '} text4={'INVITATIONS CARDS'} />
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

export default About_3