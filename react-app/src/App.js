import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Card from './components/UserCard'
import Question from './components/Question'
import TeammateForm from './components/TeammateForm';
import UserActionPage from './components/UserActionPage';
import { authenticate } from './store/session';
import { useDataContext } from './context/DataContext';
import { useSelector } from 'react-redux';
import './App.css';
import './bootstrap.min.css';




function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const { setUserData } = useDataContext();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUserData(responseData);
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }


  return (
    <div className='global-container'>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/card' exact={true} >
          <Card />
        </ProtectedRoute>
        <ProtectedRoute path='/question' exact={true} >
          <Question />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <UserActionPage/>
        </ProtectedRoute>
        <Route path='/teams/:userId/add_teammate' exact={true} >
          <TeammateForm/>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
