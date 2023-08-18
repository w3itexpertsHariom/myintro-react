import Experience from "../components/Experience"
import Knowledge from "../components/Knowledge"
import Lenguages from "../components/Lenguages"
import ResumeInfo from "../components/ResumeInfo"
import { IMAGE } from "../constent/theme"
import ContectUs from "../elements/ContectUs"

const Resume_6 = () => {
  return (
      <>
          <div className="page-wraper">
              <ContectUs title={'RESUME'} />
              <div className="content-body">
                  <div className="content-body-inner">
                      <ResumeInfo name={'I’ AM'} name2={'THOMAS GRADY'} image={IMAGE.userImg6}
                          text1={'Active listening'} text2={'Continuous learning '} text3={'improved health'} text4={'holistic perspective'}
                      />
                      <Experience />
                      <Lenguages />
                      <Knowledge />
                  </div>
              </div>
          </div>
      </>
  )
}

export default Resume_6