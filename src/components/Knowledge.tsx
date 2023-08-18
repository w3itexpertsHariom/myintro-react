import { Link } from 'react-router-dom'


const cards = [
    { icon: 'la-map-marker text-gradient', text: 'Address', para: '8901 Marmora Road Chi Minh City, Vietnam' },
    { icon: 'la-envelope-open text-gradient', text: 'Email', para: 'example@example.com', para2: 'info@example.com' },
    { icon: 'la-phone-volume text-gradient', text: 'Phone', para: '(+1) 123 456 7890', para2: '(+91) 987 654 3210' },
]

export const CardContent = () => {
    return (
        <>
            <div className="section-full content-inner-1">
                <div className="row sp40">
                    {cards.map((item, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                            <div className="icon-bx-wraper service-box m-b40 contact-box wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s" data-content="Email">
                                <div className="icon-content">
                                    <h4 className="dlab-tilte text-uppercase"><i className={`las ${item.icon}`}></i>&nbsp;{item.text}</h4>
                                    <p><Link to={'#'}>{item.para}</Link><br /><Link to={'#'}>{item.para2}</Link></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
const Knowledge = () => {
    return (
        <>
            <div className="section-full content-inner-1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                <div className="section-head">
                    <h2 className="title text-uppercase">KNOWLEDGE</h2>
                </div>
                <ul className="knowledge-tag">
                    <li>Website hosting</li>
                    <li>iOS and android apps</li>
                    <li>Create logo design</li>
                    <li>Design for print</li>
                    <li>Modern and mobile-ready</li>
                    <li>Advertising services include</li>
                    <li>Graphics and animations</li>
                    <li>Search engine marketing</li>
                </ul>
            </div>
            <CardContent />
        </>
    )
}

export default Knowledge