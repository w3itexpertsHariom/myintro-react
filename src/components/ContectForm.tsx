const ContectForm = () => {
    return (
        <>
            <div className="contact-form">
                <form method="post" className="dzForm dezPlaceAni" action="script/contact_smtp.php">
                    <div className="dzFormMsg"></div>
                    <input type="hidden" value="Contact" name="dzToDo" />
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <i className="las la-user text-gradient"></i>
                                <label>Your Name</label>
                                <input name="dzName" type="text" required className="form-control"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <i className="las la-envelope-open text-gradient"></i>
                                <label>Your Email Address</label>
                                <input name="dzEmail" type="email" className="form-control" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <i className="las la-phone-volume text-gradient"></i>
                                <label>Phone Number</label>
                                <input name="dzPhoneNumber" type="text" required className="form-control" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <i className="las la-file-alt text-gradient"></i>
                                <label>Subject</label>
                                <input name="dzSubject" type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="form-group">
                                <i className="las la-envelope-open text-gradient"></i>
                                <label>Your Message</label>
                                <textarea name="dzMessage" rows={4} className="form-control" required ></textarea>
                            </div>
                        </div>
                        <div className="col-md-12 m-b20 m-xs-b0 ">
                            <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                            <input className="form-control d-none" style={{display:'none'}} data-recaptcha="true" data-error="Please complete the Captcha"/>
                        </div>
                        <div className="col-md-12">
                            <button name="submit" type="submit" value="Submit" className="site-button button-gradient button-md radius-no">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContectForm