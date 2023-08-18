import CountUp from 'react-countup';
const Counter = () => {


    return (
        <>
            <div className="section-full content-inner-1">
                <div className="section-head">
                    <h2 className="title text-uppercase">Fun Facts</h2>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-sm-6 col-6 m-lg-b30 m-xs-b15 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="counter-style-1">
                            <div className="">
                                <h2 className="counter text-gradient"><CountUp separator="" start={0} end={2325} duration={10} /></h2>
                            </div>
                            <h6 className="counter-text">HAPPY CLIENTS</h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-sm-6 col-6 m-lg-b30 m-xs-b15 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                        <div className="counter-style-1">
                            <div className="">
                                <h2 className="counter text-gradient"><CountUp separator="" start={0} end={7582} duration={10} /></h2>
                            </div>
                            <h6 className="counter-text">WORKING HOURS</h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-sm-6 col-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                        <div className="counter-style-1">
                            <div className="">
                                <h2 className="counter text-gradient"><CountUp separator="" start={0} end={120} duration={20} /></h2>
                            </div>
                            <h6 className="counter-text">AWARDS WON</h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-sm-6 col-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
                        <div className="counter-style-1">
                            <div className="">
                                <h2 className="counter text-gradient"><CountUp separator="" start={0} end={2000} duration={10} /></h2>
                            </div>
                            <h6 className="counter-text">PROJECTS COMPLETED</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter