// src/components/Profile.jsx
import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { updateProfile } from '../Redux/actions/profileActions';
import { useDispatch, useSelector } from 'react-redux';

function Profile() {
  const user = useSelector((state) => state.auth.user);
  const [profile, setProfile] = useState({ username: '', email: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setProfile({ username: user.username, email: user.email });
    }
  }, [user]);

const handleUpdate = () => {
    if (!profile.username || !profile.email) {
      toast.error('All fields are required');
      return;
    }
    dispatch(updateProfile(profile))
      .then(() => {
        toast.success('Profile Updated Successfully!');
      })
      .catch(() => {
        toast.error('Profile Update Failed');
      });
  };
  
  return (
    <Container>
      <h2 className="my-4">Profile</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={profile.username}
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleUpdate}>
          Update Profile
        </Button>
      </Form>
    </Container>
  );
}

export default Profile;
