import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { fetchBlogs } from '../Redux/actions/blogActions';
import { useDispatch, useSelector } from 'react-redux';
import CreateBlog from '../Components/CreateBlog';
import Header from '../Components/Header';

function Dashboard() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs || []);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <>
    <Header />
    <Container className='p-5 container-fluid bg-secondary text-light my-4'>
      <h2 className="my-4">Welcome, {user && user.username}</h2>
      <Row>
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <Col key={index} md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.content}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </Row>
      <CreateBlog />
    </Container>
    </>
  );
}

export default Dashboard;
