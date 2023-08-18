
interface propsFile {
    text1: string
    text2: string
    text3: string
    text4: string
}

const MyServices = (props: propsFile) => {
    const aboutService = [
        { title: props.text1 },
        { title: props.text2 },
        { title: props.text3 },
        { title: props.text4 },
    ]

    return (
        <>
            <div className="section-full content-inner-1">
                <div className="section-head">
                    <h2 className="title text-uppercase">My Services</h2>
                </div>
                <div className="row sp40">
                    {aboutService.map((item, index) => (
                        <div className="col-xl-6 col-lg-12 wow fadeInUp" key={index}>
                            <div className="icon-bx-wraper service-box m-b40">
                                <div className="icon-content">
                                    <h4 className="dlab-tilte text-uppercase">{item.title}</h4>
                                    <p>Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.</p>
                                </div>
                                <i className="ti-desktop bg-icon"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MyServices