import { Link } from 'react-router-dom'


interface ProfileProps {
    image: string
}
const AboutInfo = (props: ProfileProps) => {
    return (
        <>
            <div className="section-full wow fadeInUp">
                <img src={props.image} alt="" />
            </div>
            <div className="section-full content-inner-1">
                <div className="row align-items-center">
                    <div className="col-md-6 wow fadeInUp">
                        <div className="section-head m-b0">
                            <h2 className="title text-uppercase">What I Do</h2>
                            <p className="m-b0">Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam, pellentesque enim ac, faucibus tortor. Nulla odio nibh, cursus sit amet urna id, dignissim euismod augue.</p>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp">
                        <ul className="personal-info">
                            <li><span>AGE</span>29</li>
                            <li><span>RESIDENCE</span>USA</li>
                            <li><span>ADDRESS</span>88 SOME STREET, SOME TOW</li>
                            <li><span>E-MAIL</span><Link to="#">EMAIL@EXAMPLE.COM</Link></li>
                            <li><span>PHONE</span>+0123 123 456 789</li>
                            <li><span>SKYPE</span>ALEX.SMITH</li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutInfo