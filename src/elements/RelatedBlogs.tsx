import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"


const ourBlogs = [
    { img: IMAGE.blogGridPic1, postTitle: 'Creativity Is More Than', date: "february 23, 2023" },
    { img: IMAGE.blogGridPic2, postTitle: 'The Influence Of Blog', date: "february 22, 2023 " },
];


const userComments = [
    {
        image: IMAGE.testimonialPic1, name: 'Nashid Martines',
        list: <ol className="children">
            <li className="comment odd parent">
                <div className="comment-body">
                    <div className="comment-author vcard"> <img className="avatar photo" src={IMAGE.testimonialPic2} alt="" /> <cite className="fn">Hackson Willingham</cite> <span className="says">says:</span> </div>
                    <div className="comment-meta"> <Link to="#">October 6, 2015 at 7:15 am</Link> </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                        In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                        ac elementum ligula blandit ac.</p>
                    <div className="reply"> <Link to="#" className="comment-reply-link">Reply</Link> </div>
                </div>
            </li>
        </ol>
    },
    { image: IMAGE.testimonialPic2, name: 'Hackson Willingham' },
    { image: IMAGE.testimonialPic3, name: 'Nashid Martines' },
]
const RelatedBlogs = () => {
    return (
        <>


            <h5 className="widget-title">Related Blogs</h5>
            <div className="row">
                {ourBlogs.map((item, index) => (
                    <div className="col-xl-6 col-lg-6 col-sm-6" key={index}>
                        <div className="blog-post">
                            <div className="dlab-post-media">
                                <Link to="/blog-single"><img src={item.img} alt="" /></Link>
                            </div>
                            <div className="dlab-post-info">
                                <div className="dlab-post-meta">
                                    <ul>
                                        <li className="post-date">{item.date}</li>
                                    </ul>
                                </div>
                                <div className="dlab-post-title">
                                    <h5 className="post-title"><Link to="/blog-single">{item.postTitle}</Link></h5>
                                </div>
                                <div className="dlab-post-text">
                                    <p>Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <RelatedBlogsComments />

        </>
    )
}

export const RelatedBlogsComments = () => {
    return (
        <>
            <div className="clear m-b30" id="comment-list">
                <div className="comments-area" id="comments">
                    <h2 className="comments-title">3 Comments</h2>
                    <div className="clearfix">
                        <ol className="comment-list">
                            {userComments.map((item, ind) => (
                                <li className="comment" key={ind}>
                                    <div className="comment-body">
                                        <div className="comment-author vcard"> <img className="avatar photo" src={item.image} alt="" /> <cite className="fn">{item.name}</cite> <span className="says">says:</span> </div>
                                        <div className="comment-meta"> <Link to="#">October 6, 2015 at 7:15 am</Link> </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neqnsectetur adipiscing elit. Nam viae neqnsectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. </p>
                                        <div className="reply"> <Link to="#" className="comment-reply-link">Reply</Link> </div>
                                    </div>
                                    {item.list}
                                </li>
                            ))}
                        </ol>
                        <div className="comment-respond" id="respond">
                            <h4 className="comment-reply-title" id="reply-title">Leave Link Reply <small> <Link style={{ display: 'none' }} to="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</Link> </small> </h4>
                            <form className="comment-form" id="commentform" method="post">
                                <p className="comment-form-author">
                                    <label htmlFor="author">Name <span className="required">*</span></label>
                                    <input type="text" value="author" name="author" placeholder="Author" id="author" />
                                </p>
                                <p className="comment-form-email">
                                    <label htmlFor="email">Email <span className="required">*</span></label>
                                    <input type="text" value="email" placeholder="Email" name="email" id="email" />
                                </p>
                                <p className="comment-form-comment">
                                    <label htmlFor="comment">Comment</label>
                                    <textarea rows={8} name="comment" placeholder="Comment" id="comment"></textarea>
                                </p>
                                <p className="form-submit">
                                    <input type="submit" onClick={(e)=>{e.preventDefault()}} value="Post Comment" className="submit" id="submit" name="submit" />
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RelatedBlogs