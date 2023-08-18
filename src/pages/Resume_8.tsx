import Experience from "../components/Experience"
import Knowledge from "../components/Knowledge"
import Lenguages from "../components/Lenguages"
import ResumeInfo from "../components/ResumeInfo"
import { IMAGE } from "../constent/theme"
import ContectUs from "../elements/ContectUs"

const Resume_8 = () => {
    return (
        <>
            <div className="page-wraper">
                <ContectUs title={'RESUME'} />
                <div className="content-body">
                    <div className="content-body-inner">
                        <ResumeInfo name={'I’ AM'} name2={' Ella Grady'} image={IMAGE.userImg8}
                            text1={'Networking '} text2={'Content writing'} text3={'Marketing '} text4={'Negotiation'}
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

export default Resume_8