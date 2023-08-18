

const timeLine = [
    { title: 'University of Studies', length: '2019', skill: 'Fronted Development' },
    { title: 'University of Studies', length: '2014', skill: 'Graphic Design' },
    { title: 'University of Studies', length: '2012', skill: 'Senior Ui/Ux Designer' },
    { title: 'University of Studies', length: '2011', skill: 'Junior Ui/Ux Designer' },
]
const Experience = () => {
    return (
        <>
            <div className="section-full content-inner-1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="section-head">
                    <h2 className="title text-uppercase">EXPERIENCE</h2>
                </div>
                <div className="timeline">
                    <div className="box-left">
                        <h4 className="title text-primary">2019</h4>
                        <span>University of Studies</span>
                    </div>
                    <div className="box-right">
                        <h6 className="title text-uppercase">Fronted Development</h6>
                        <p>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</p>
                    </div>
                </div>
                <div className="timeline">
                    <div className="box-left">
                        <h4 className="title text-primary">2014</h4>
                        <span>University of Studies</span>
                    </div>
                    <div className="box-right">
                        <h6 className="title text-uppercase">Graphic Design</h6>
                        <p>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</p>
                    </div>
                </div>
            </div>

            <div className="section-full content-inner-1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                <div className="section-head">
                    <h2 className="title text-uppercase">EDUCATION</h2>
                </div>
                {timeLine.map((item, index) => (
                    <div className="timeline" key={index}>
                        <div className="box-left">
                            <h4 className="title text-primary">{item.length}</h4>
                            <span>{item.title}</span>
                        </div>
                        <div className="box-right">
                            <h6 className="title text-uppercase">{item.skill}</h6>
                            <p>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</p>
                        </div>
                    </div>

                ))}

            </div>
        </>
    )
}

export default Experience