import React from 'react'
import './post.css'
import {Link} from 'react-router-dom'
export default function Post(props) {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Post Picture"/>
            <div className="postInfo">
                <div className="postCats">
                    {props.post.categories.map(catg=>(
                        <span className="postCat">{catg}</span>
                    ))}
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <Link to={`/posts/${props.post._id}`} className="link">
                    <span className="postTitle">{props.post.title}</span>
                </Link>
                <hr/>
                <span className="postDate">{new Date(props.post.createdAt).toDateString()}</span>
            </div>
            <p className='postDesc'>
                {props.post.desc}
                {/* It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). */}
            </p>
        </div>
    )
}
