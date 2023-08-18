import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme";

const ComingSoon = () => {
    const [day, setDays] = useState('');
    const [hour, sethour] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [modalBox, setModalBox] = useState(false);
    useEffect(() => {
        let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
        setInterval(function () {
            let now = new Date().getTime();
            let distance = countDownDate - now;
            setDays(`${Math.floor(distance / (1000 * 360 * 60 * 24))}`);
            sethour(`${Math.floor((distance % (1000 * 50 * 60 * 24)) / (1000 * 120 * 60))}`);
            setMinutes(`${Math.floor((distance % (1000 * 50 * 78)) / (1000 * 60))}`);
            setSeconds(`${Math.floor((distance % (1000 * 60)) / 1000)}`);

        }, 1000);
    }, []);



    return (
        <>
            <div className="page-wraper">
                <div className="dlab-coming-soon">
                    <div className="sidenav-menu">
                        <div className="logo">
                            <Link to="/"><img src={IMAGE.logoIcon} alt="" /></Link>
                        </div>
                        <ul className="dlab-social-icon d-flex flex-column">
                            <li><Link to="#"><span>Facebook</span></Link></li>
                            <li><Link to="#"><span>Twitter</span></Link></li>
                            <li><Link to="#"><span>Linkedin</span></Link></li>
                        </ul>
                    </div>
                    <div className="clearfix dlab-coming-bx">
                        <div className="dlab-content">
                            <h2 className="dlab-title ml2"><span>We Are Doing Great,</span><br /><span>Almost Done...</span></h2>
                            <div className="countdown">
                                <div className="date">
                                    <span className="days time">{day}</span>
                                    <span>Days</span>
                                </div>
                                <div className="date">
                                    <span className="hours time">{hour}</span>
                                    <span>Hours</span>
                                </div>
                                <div className="date">
                                    <span className="mins time">{minutes}</span>
                                    <span>Minutes</span>
                                </div>
                                <div className="date">
                                    <span className="secs time">{seconds}</span>
                                    <span>Second</span>
                                </div>
                            </div>
                            <div className="dlab-coming-btn">
                                <Link to="/contact-us-photographer" className="site-button button-gradient button-md radius-no m-r10">Get In Touch</Link>
                                <Link to="#" onClick={() => { setModalBox(true) }} data-toggle="modal" data-target="#exampleModal" className="site-button button-gradient button-md radius-no">Subscribe Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="slider-box bg-black">
                        <video src={IMAGE.video2} autoPlay muted loop style={{ objectFit: 'cover', width: '100%', height: '100%' }}></video>
                        <img style={{ position: 'absolute', top: '0', right: '0' }} src={IMAGE.backgroundBg9} alt="" />
                    </div>
                </div>
                <div className={`modal fade subscribe-box ${modalBox === true ? 'show' : ''}`} id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" style={{ display: `${modalBox === true ? 'block' : 'none'}`, marginTop: '100px' }}>
                    <div className="modal-dialog" role="document">
                        <form action="script/mailchamp.php" className="dzSubscribe modal-content" method="post">
                            <div className="modal-header">
                                <img src={IMAGE.bellImg} alt="" />
                                <h5 className="modal-title" id="exampleModalLabel">Subscribe Newsletter</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.</p>
                                <button onClick={() => { setModalBox(false) }} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <input name="dzEmail" id="SubscribeInput" className="form-control radius-no" placeholder="Your Email Address" type="email" />
                                    <div className="dzSubscribeMsg"></div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="site-button button-gradient button-md radius-no">Subscribe Now</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div onClick={() => { setModalBox(false) }} className={`modal-${modalBox === true ? 'backdrop' : ''}`}></div>
            </div>
        </>
    )
}

export default ComingSoon