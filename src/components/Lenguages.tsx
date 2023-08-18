const lenguageDetail = [
    {
        img: <svg className="radial-progress" data-percentage="60" viewBox="0 0 80 80">
            <circle className="incomplete" cx="40" cy="40" r="35"></circle>
            <circle className="complete" cx="40" cy="40" r="35" style={{ strokeDashoffset: 39.58406743523136 }}></circle>
            <text className="percentage" x="50%" y="58%" transform="matrix(0, 1, -1, 0, 80, 0)">60%</text>
        </svg>, name: 'English'
    },
    {
        img: <svg className="radial-progress" data-percentage="45" viewBox="0 0 80 80">
            <circle className="incomplete" cx="40" cy="40" r="35"></circle>
            <circle className="complete" cx="40" cy="40" r="35" style={{ strokeDashoffset: 39.58406743523136 }}></circle>
            <text className="percentage" x="50%" y="58%" transform="matrix(0, 1, -1, 0, 80, 0)">45%</text>
        </svg >, name: 'French'
    },
    {
        img: <svg className="radial-progress" data-percentage="75" viewBox="0 0 80 80">
            <circle className="incomplete" cx="40" cy="40" r="35"></circle>
            <circle className="complete" cx="40" cy="40" r="35" style={{ strokeDashoffset: 39.58406743523136 }}></circle>
            <text className="percentage" x="50%" y="58%" transform="matrix(0, 1, -1, 0, 80, 0)">75%</text>
        </svg>, name: 'German'
    },
    {
        img: <svg className="radial-progress" data-percentage="95" viewBox="0 0 80 80">
            <circle className="incomplete" cx="40" cy="40" r="35"></circle>
            <circle className="complete" cx="40" cy="40" r="35" style={{ strokeDashoffset: 39.58406743523136 }}></circle>
            <text className="percentage" x="50%" y="58%" transform="matrix(0, 1, -1, 0, 80, 0)">95%</text>
        </svg>, name: 'Italian'
    },
]
const Lenguages = () => {
    return (
        <>
            <div className="section-full content-inner-1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                <div className="section-head">
                    <h2 className="title text-uppercase">LANGUAGES</h2>
                </div>
                <div className="row">
                    {lenguageDetail.map((item, index) => (
                        <div className="col-xl-3 col-md-6 col-6 m-lg-b20" key={index}>
                            <div className="radial-progress-box">
                                {item.img}
                                <div className="icon-content">
                                    <h5 className="title">{item.name}</h5>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>)
}

export default Lenguages