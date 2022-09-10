import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDataContext } from '../context/DataContext';
import { useSelector } from 'react-redux';



function UsersList() {

  const { userData } = useDataContext();
  const sessionUser = useSelector(state => state.session.user);


  if (sessionUser) {
  console.log(userData['1'].teammates)
  }

  return (
    <>
      <h1>User List: </h1>
    </>
  );
}

export default UsersList;
