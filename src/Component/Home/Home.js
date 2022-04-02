import React, { useContext, useEffect, useState } from 'react';
import { BlogContext } from '../../App';
import Blog from '../Blog/Blog';

const Home = () => {
    const [blogs, setBlogs] = useContext(BlogContext)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    // const[blogs,setBlogs]=useState([])
    // useEffect(() => {
    //     fetch('https://retro-tech-talks.herokuapp.com/blogs')
    //         .then(res => res.json())
    //         .then(data => setBlogs(data))
    // }, [])


    return (
        <div className='mt-5'>
            {
                blogs.map(blog => <Blog
                    key={blog._id}
                    blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default Home;