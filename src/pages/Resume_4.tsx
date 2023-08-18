import Experience from "../components/Experience"
import Knowledge from "../components/Knowledge"
import Lenguages from "../components/Lenguages"
import ResumeInfo from "../components/ResumeInfo"
import { IMAGE } from "../constent/theme"
import ContectUs from "../elements/ContectUs"

const Resume_4 = () => {
  return (
      <>
          <div className="page-wraper">
              <ContectUs title={'RESUME'} />
              <div className="content-body">
                  <div className="content-body-inner">
                      <ResumeInfo name={'I’ AM'} name2={' ELLA GRADY'} image={IMAGE.userImg4}
                          text1={'Good practical'} text2={'Communication '} text3={'Patient Care'} text4={'Emotional Intelligence'}
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

export default Resume_4