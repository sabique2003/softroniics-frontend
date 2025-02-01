import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createBlog } from '../Redux/actions/blogActions';

function CreateBlog() {
  const [blog, setBlog] = useState({ title: '', content: '' });
  const dispatch = useDispatch();

  const handleCreate = () => {
    if (!blog.title || !blog.content) {
      // Display error message
      return;
    }
    dispatch(createBlog(blog));
    // Reset form
    setBlog({ title: '', content: '' });
  };

  return (
    <Container>
      <h2 className="my-4">Create a Blog Post</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={blog.content}
            onChange={(e) => setBlog({ ...blog, content: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleCreate}>
          Create Post
        </Button>
      </Form>
    </Container>
  );
}

export default CreateBlog;
