import Experience from "../components/Experience"
import Knowledge from "../components/Knowledge"
import Lenguages from "../components/Lenguages"
import ResumeInfo from "../components/ResumeInfo"
import { IMAGE } from "../constent/theme"
import ContectUs from "../elements/ContectUs"

const Resume_5 = () => {
  return (
    <>
      <div className="page-wraper">
        <ContectUs title={'RESUME'} />
        <div className="content-body">
          <div className="content-body-inner">
            <ResumeInfo name={'I’ AM'} name2={'THOMAS GRADY'} image={IMAGE.userImg5}
              text1={'SECURITY'} text2={'Communication '} text3={'Law Enforcement'} text4={'Surveillance'}
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

export default Resume_5