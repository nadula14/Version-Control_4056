import React, { useState, useEffect } from 'react';
import styles from './TravelBlog.css';
import BlogForm from './BlogForm';
import axios from 'axios'; 
function TravelBlog() {
  const [showForm, setShowForm] = useState(false);
  const [blogs, setBlogs] = useState([]);

  
  const fetchAllBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/v1/blog/all'); 
      setBlogs(response.data); 
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  

  const deleteBlog = async (id) => {
    try {
      
      await axios.delete(`http://localhost:3001/api/v1/blog/${id}`);

     
      setBlogs(blogs.filter(blog => blog._id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

 
  useEffect(() => {
    fetchAllBlogs();
  }, []);

  const addBlog = (blog) => {
   
    setBlogs([...blogs, blog]);
  };

  return (
    <div className='blog-column-container'>
      <h1 className='subheadings'>Travel Blogs</h1>
      <button onClick={() => setShowForm(!showForm)}>Add My Blog</button>
      {showForm && <BlogForm onBlogSubmit={addBlog} />}

      <div className="blog-column">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <h2 className='title1'>{blog.title}</h2>
            <p className='block'>{blog.content}</p>
            <button onClick={() => deleteBlog(blog._id)} type="button">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelBlog;
