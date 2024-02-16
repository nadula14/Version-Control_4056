
import React, { useState } from 'react';
import styles from './BlogForm.css';
import axios from 'axios';

function BlogForm({ onBlogSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post('http://localhost:3001/api/v1/blog/', {
        title,
        content,
      });

     
      if (response.status === 201) {
        
        onBlogSubmit(response.data);

        
        setTitle('');
        setContent('');
      }
    } catch (error) {
      
      console.error('Error creating blog:', error);
    }
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="title-label">Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="title-input" />
      </div>
      <div className="form-group">
        <label className="content-label">Content</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} className="content-textarea" />
      </div>
      <button type="submit" className="submit-button">Submit Blog</button>
    </form>
    </div>
  );
}

export default BlogForm;
