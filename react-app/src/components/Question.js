import React, { useEffect, useState } from 'react';
import { useDataContext } from '../context/DataContext';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

function Question(){
  const { userData } = useDataContext();
  let data = userData['1'].teammates;
  const teammates = [];

  for(const teammate of data){
    teammates.push(teammate);
  }

  console.log(teammates);
  
  // let question = `This person loves to eat ${teammates[0].q1_ans} and can watch ${teammates[0].q2_ans} all day. Who are we talking about?`;
  let question = 'This person loves to eat sushi and can watch crime shows all day. Who do you think it is?'
  // let question2 = `This person loves to watch ${teammates[1].q2_ans} and eat ${teammates[1].q1_ans}. Who is this?` 
  // let question3 = `This person loves to eat ${teammates[2].q1_ans} and can watch ${teammates[2].q2_ans} all day. Who are we talking about?`;
  // let question4 = `This person loves to eat ${teammates[3].q1_ans} and can watch ${teammates[3].q2_ans} all day. Who are we talking about?`;
  // let question5 = `This person loves to watch ${teammates[4].q2_ans} and eat ${teammates[4].q1_ans}. Who is this?` 
  // let questions = [question,question2,question3,question4,question5];
  

  return(
    <>
      <Card>
        <p id="question">
          {question}
        </p>
      </Card>
    </>
  )
}

export default Question;
