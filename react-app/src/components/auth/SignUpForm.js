import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import { Button, Form } from 'react-bootstrap'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='form-container'>
    <Form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <Form.Group controlId='formFirstName' className='form-group'>
        <Form.Label className='font-weight-bold' >User Name</Form.Label>
        <Form.Control type="text"  value={username} onChange={updateUsername} maxLength={25} />
      </Form.Group>
      <Form.Group className='form-group'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></Form.Control>
      </Form.Group>
      <Form.Group className='form-group'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></Form.Control>
      </Form.Group>
      <Form.Group className='form-group'>
        <Form.Label>Repeat Password</Form.Label>
        <Form.Control
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></Form.Control>
      </Form.Group>
      <Button className="form-btn" type='submit'>Sign Up</Button>
    </Form>
    </div>
  );
};

export default SignUpForm;
