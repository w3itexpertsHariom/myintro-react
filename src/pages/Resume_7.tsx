import Experience from "../components/Experience"
import Knowledge from "../components/Knowledge"
import Lenguages from "../components/Lenguages"
import ResumeInfo from "../components/ResumeInfo"
import { IMAGE } from "../constent/theme"
import ContectUs from "../elements/ContectUs"

const Resume_7 = () => {
  return (
      <>
          <div className="page-wraper">
              <ContectUs title={'RESUME'} />
              <div className="content-body">
                  <div className="content-body-inner">
                      <ResumeInfo name={'I’ AM'} name2={'Thomas Grady'} image={IMAGE.userImg7}
                          text1={'Confidence'} text2={'communication  '} text3={'Flexibility'} text4={'friendly'}
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

export default Resume_7