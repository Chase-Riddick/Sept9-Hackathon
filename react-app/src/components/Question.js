import React, { useEffect, useState } from 'react';
import { useDataContext } from '../context/DataContext';
import { useSelector } from 'react-redux';

function Question(){
  const { userData } = useDataContext();
  let data = userData['1'].teammates;
  const teammates = [];

  for(const teammate of data){
    teammates.push(teammate);
  }

  const num = Math.floor(Math.random() * 5);
  console.log(teammates)

  let question = `This person loves to eat ${teammates[num].q1_ans} and can watch ${teammates[num].q2_ans} all day. Who are we talking about?`;

  return(
    <>
      <h1>{question}</h1>
    </>
  )
}

export default Question;
