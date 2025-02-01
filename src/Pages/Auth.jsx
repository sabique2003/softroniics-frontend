
import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { register, login } from '../Redux/actions/authActions'; 

function Auth() {
  const [state, setState] = useState(false); 
  const [user, setUser] = useState({ email: '', username: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const changeState = () => {

    setState(!state);
    setUser({ email: '', username: '', password: '' });
    setErrors({});
  };

  const validate = () => {

    let errors = {};
    if (!user.email) errors.email = 'Email is required';
    if (!user.password) errors.password = 'Password is required';
    if (state && !user.username) errors.username = 'Username is required';
    return errors;
  };

  const handleRegister = () => {
    const errors = validate();
    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }
    dispatch(register(user));
  };

  const handleLogin = () => {
    const errors = validate();
    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }
    dispatch(login({ email: user.email, password: user.password }));
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      sessionStorage.setItem('token', auth.token);
      sessionStorage.setItem('user', JSON.stringify(auth.user)); 
      toast.success('Login Successful!');
      navigate('/dash');
    } else if (auth.error) {
      toast.error(auth.error);
    }
  }, [auth, navigate]);

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <Row className="shadow-lg p-4 bg-white rounded" style={{ width: '50%' }}>
        <Col>
          <h3 className="text-center mb-4">{state ? 'Register' : 'Login'}</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </Form.Group>
            {state && (
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
                {errors.username && (
                  <small className="text-danger">{errors.username}</small>
                )}
              </Form.Group>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={user.password}
                onChange={(e) =>
                  setUser({ ...user, password: e.target.value })
                }
              />
              {errors.password && (
                <small className="text-danger">{errors.password}</small>
              )}
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button
                variant={state ? 'primary' : 'success'}
                onClick={state ? handleRegister : handleLogin}
              >
                {state ? 'Register' : 'Login'}
              </Button>
              <Button variant="link" onClick={changeState}>
                {state
                  ? 'Already have an account? Login'
                  : "Don't have an account? Register"}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Auth;
