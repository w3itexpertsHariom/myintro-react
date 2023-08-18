import ContectUs from '../elements/ContectUs'
import ResumeInfo from '../components/ResumeInfo'
import { IMAGE } from '../constent/theme'
import Experience from '../components/Experience'
import Lenguages from '../components/Lenguages'
import Knowledge from '../components/Knowledge'

const Resume = () => {
    return (
        <>
            <div className="page-wraper">
                <ContectUs title={'RESUME'} />
                <div className="content-body">
                    <div className="content-body-inner">
                        <ResumeInfo name={'I’ AM'} name2={' THOMAS GRADY'} image={IMAGE.userImg1} 
                            text1={'Creativity'} text2={'PHOTOGRAPHY'} text3={'EDITING'} text4={'WORKING'}
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

export default Resume