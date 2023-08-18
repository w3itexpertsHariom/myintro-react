import { Link } from 'react-router-dom'



const detail = [
    { text: 'BIRTHDAY :', text2: '01.07.1990' },
    { text: 'LOCATION :', text2: 'AVE 11, NEW YORK, USA' },
    { text: 'INTERESTS :', text2: 'PLAYSTATION, READING`' },
    { text: 'STUDY :', text2: 'UNIVERSITY OF CHICAGO' },
    { text: 'AGE :', text2: '29' },
    { text: 'DEGREE :', text2: 'MASTER' },
    { text: 'MAIL :', text2: 'INFO@EXAMPLE.COM' },
    { text: 'PHONE :', text2: '(+01) 123 456 7890' },
]


interface profileProps {
    image: string
    name: string
    name2: string
    text1: string
    text2: string
    text3: string
    text4: string

}
const ResumeInfo = (props: profileProps) => {
    const progressBar = [
        { progress: '70%', skill: props.text1 },
        { progress: '90%', skill: props.text2 },
        { progress: '45%', skill: props.text3 },
        { progress: '67%', skill: props.text4 },
    ]
    return (
        <>
            <div className="section-full">
                <div className="row">
                    <div className="col-xl-6 col-lg-12 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="sticky-top m-lg-b30 zIndex2">
                            <img src={props.image} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                        <div className="section-head">
                            <h2 className="title text-uppercase">{props.name}<br /><span className="text-gradient">{props.name2}</span></h2>
                            <p className="m-b0">Hi! My name is <span className="text-primary">{props.name2}</span>
                                . I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
                            </p>
                        </div>
                        {progressBar.map((item, index) => (
                            <div className="progress-box" key={index}>
                                <div className="progress-title">{item.skill}<span>{item.progress}</span></div>
                                <div className="progress">
                                    <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay="0.5s" role="progressbar" style={{ width: `${item.progress}` }}></div>
                                </div>
                            </div>
                        ))}
                        <div className="m-t50 m-xs-t30">
                            <Link to="/resume-photographer" className="site-button button-gradient button-md radius-no">Download CV</Link>
                            <Link to="/portfolio-photographer" className="site-button white button-md radius-no">Check portfolio</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-full content-inner-1">
                <div className="resume-tag">
                    {detail.map((item2, ind) => (
                        <div className="resume-tag-btn wow fadeInUp" key={ind}>
                            <strong>{item2.text}</strong>
                            <span>{item2.text2}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ResumeInfo