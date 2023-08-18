import { IMAGE } from '../constent/theme'

const categery = [
    { img: IMAGE.clientLogo1 },
    { img: IMAGE.clientLogo2 },
    { img: IMAGE.clientLogo3 },
    { img: IMAGE.clientLogo4 },
    { img: IMAGE.clientLogo5 },
    { img: IMAGE.clientLogo6 },
    { img: IMAGE.clientLogo7 },
    { img: IMAGE.clientLogo8 },
    { img: IMAGE.clientLogo9 },
    { img: IMAGE.clientLogo10 },
    { img: IMAGE.clientLogo11 },
    { img: IMAGE.clientLogo12 },
]
const OurClient = () => {
    return (
        <>
            <div className="row client-wrapper">
                {categery.map((item, index) => (
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6 wow fadeInUp" key={index}>
                        <div className="client-logo">
                            <img className="logo-main" src={item.img} alt="" />
                            <img className="logo-hover" src={item.img} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default OurClient