import Experience from "../components/Experience"
import Knowledge from "../components/Knowledge"
import Lenguages from "../components/Lenguages"
import ResumeInfo from "../components/ResumeInfo"
import { IMAGE } from "../constent/theme"
import ContectUs from "../elements/ContectUs"

const Resume_3 = () => {
    return (
        <>
            <div className="page-wraper">
                <ContectUs title={'RESUME'} />
                <div className="content-body">
                    <div className="content-body-inner">
                        <ResumeInfo name={'I’ AM'} name2={' ELLA GRADY'} image={IMAGE.userImg3}
                            text1={'DIRECTING'} text2={'PHOTOGRAPHY'} text3={'HAIRSTYLING'} text4={'RETOUCHING'}
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

export default Resume_3