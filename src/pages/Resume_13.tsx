import Experience from "../components/Experience"
import Knowledge from "../components/Knowledge"
import Lenguages from "../components/Lenguages"
import ResumeInfo from "../components/ResumeInfo"
import { IMAGE } from "../constent/theme"
import ContectUs from "../elements/ContectUs"

const Resume_13 = () => {
    return (
        <>
            <div className="page-wraper">
                <ContectUs title={'RESUME'} />
                <div className="content-body">
                    <div className="content-body-inner">
                        <ResumeInfo name={'I’ AM'} name2={'Thomas Grady'} image={IMAGE.userImg13}
                            text1={'Digital Awareness'} text2={'Solid content research '} text3={'Video editing'} text4={'good understanding'}
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

export default Resume_13