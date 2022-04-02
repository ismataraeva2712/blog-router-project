import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css'
const Blog = (props) => {
    const { admin, blog: blogBody, imageURL, title, _id } = props.blog
    let navigate = useNavigate()
    return (
        <div className='blog-container container mt-5'>
            <div >
                <img src={imageURL} alt="" />
            </div>
            <div className='ms-5 blog-content'>
                <h4>{title}</h4>
                <h6>{admin}</h6>
                <p>{blogBody < 400 ? blogBody.length : blogBody.slice(0, 400)}
                    <span onClick={() => navigate(`/blogDetail/${_id}`)} className='fw-bold'>...Read More</span>
                </p>

            </div>
        </div>
    );
};

export default Blog;