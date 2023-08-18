import Experience from "../components/Experience"
import Knowledge from "../components/Knowledge"
import Lenguages from "../components/Lenguages"
import ResumeInfo from "../components/ResumeInfo"
import { IMAGE } from "../constent/theme"
import ContectUs from "../elements/ContectUs"

const Resume_11 = () => {
    return (
        <>
            <div className="page-wraper">
                <ContectUs title={'RESUME'} />
                <div className="content-body">
                    <div className="content-body-inner">
                        <ResumeInfo name={'I’ AM'} name2={'Ella Grady'} image={IMAGE.userImg11}
                            text1={'musicality'} text2={'focus'} text3={'Activity '} text4={'flexibility'}
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

export default Resume_11