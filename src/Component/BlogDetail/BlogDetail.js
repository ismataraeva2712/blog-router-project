import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from '../../App';
import './BlogDetails.css'
const BlogDetail = () => {
    const params = useParams()
    const { id } = params
    const [blogs, setBlogs] = useContext(BlogContext)
    const blog = blogs.find(blog => blog._id === id)
    // console.log(blogs)

    // const [blogItem, setBlogItem] = useState({})

    // useEffect(() => {
    //     fetch(`https://retro-tech-talks.herokuapp.com/getBlog/${id}`)
    //         .then(res => res.json())
    //         .then(data => setBlogItem(data))
    // }, [id])
    // const { admin, blog, imageURL, title } = blogItem
    return (
        <div className='container'>
            <img className='blog-img' src={blog.imageURL} alt="" />
            <h3>{blog.title}</h3>
            <p className='fw-bold'>---{blog.admin}---</p>
            <p className='text'>{blog.blog}</p>
        </div>
    );
};

export default BlogDetail;