import ContectUs from '../elements/ContectUs'
import ContectForm from '../components/ContectForm'
import { CardContent } from '../components/Knowledge'

const ContectPage = () => {
    return (
        <>
            <div className="page-wraper">
                <ContectUs title={'Contact Us'} />
                <div className="content-body">
                    <div className="content-body-inner">
                        <div className="section-full">
                            <div className="section-head">
                                <h2 className="title text-uppercase">How Can I <span className="text-gradient">Help You</span>?</h2>
                            </div>
                            <ContectForm />
                            <CardContent />
                            <div className="section-full maps">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14445.871196953145!2d75.8417313!3d25.153677599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1580295328844!5m2!1sen!2sin" style={{ border: 0, width: '100%' }} allowFullScreen ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContectPage