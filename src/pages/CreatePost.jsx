import React, { useState } from 'react';
import styled from 'styled-components';

const CreatePostWrapper = styled.div`
  max-width: 600px;
  margin: 80px auto 0;
  padding: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 5px;
  resize: vertical;
`;

const FileInput = styled.input`
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
`;

function CreatePost() {
  const [post, setPost] = useState({
    content: '',
    media: null,
    type: 'post', // 'post', 'story', or 'video'
  });

  const handleChange = (e) => {
    if (e.target.name === 'media') {
      setPost({ ...post, media: e.target.files[0] });
    } else {
      setPost({ ...post, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in post) {
      formData.append(key, post[key]);
    }
    // Here you would typically send the formData to your backend
    console.log('Post submitted:', formData);
    // Reset form
    setPost({ content: '', media: null, type: 'post' });
  };

  return (
    <CreatePostWrapper>
      <h2>Create New Post</h2>
      <Form onSubmit={handleSubmit}>
        <TextArea
          name="content"
          placeholder="What's on your mind?"
          value={post.content}
          onChange={handleChange}
          required
        />
        <select name="type" value={post.type} onChange={handleChange}>
          <option value="post">Post</option>
          <option value="story">Story</option>
          <option value="video">Video</option>
        </select>
        <FileInput
          type="file"
          name="media"
          onChange={handleChange}
          accept={post.type === 'video' ? 'video/*' : 'image/*'}
        />
        <Button type="submit">Post</Button>
      </Form>
    </CreatePostWrapper>
  );
}

export default CreatePost;