import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDataContext } from '../context/DataContext';


function UsersList() {

  const { userData } = useDataContext();


  console.log(userData)

  return (
    <>
      <h1>User List: </h1>
    </>
  );
}

export default UsersList;
