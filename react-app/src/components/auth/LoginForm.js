import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import { Button, Form } from 'react-bootstrap'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='form-container'>
    <Form onSubmit={onLogin}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <Form.Group className='form-group'>
        <Form.Label htmlFor='email'>Email:</Form.Label>
        <Form.Control
          name='email'
          type='text'
          placeholder=''
          value={email}
          onChange={updateEmail}
        />
      </Form.Group>
      <Form.Group className='form-group'>
        <Form.Label htmlFor='password'>Password:</Form.Label>
        <Form.Control
          name='password'
          type='password'
          placeholder=''
          value={password}
          onChange={updatePassword}
        />
        <Button className="form-btn" type='submit'>Login</Button>
      </Form.Group>
    </Form>
    </div>
  );
};

export default LoginForm;
