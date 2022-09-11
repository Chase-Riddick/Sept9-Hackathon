import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDataContext } from '../context/DataContext';
import { useSelector } from 'react-redux';
import { Card, ListGroup } from 'react-bootstrap';

function UserCard(){
  const { userData } = useDataContext();

  let data = userData['1'].teammates;
  const teammates = [];
  
  for(const teammate of data){
    teammates.push(teammate);
  }

  let result = [];
  for(const teammate of teammates){
    if(teammate.first_name === 'Peter'){
      result.push(teammate)
    }
  }

  console.log(result)
  
  return (
    // <Card style = {{ width: '18rem' }}>
    //   <Card.Img src = {result[0].img_url} />
    //   <Card.Title>{result[0].first_name} {result[0].last_name}</Card.Title>
    //   <ListGroup className="list-group-flush">
    //     <ListGroup.Item>{result[0].pronunciation}</ListGroup.Item>
    //     <ListGroup.Item>{result[0].pronouns}</ListGroup.Item>
    //     Eh - ri - ck Vas-que-z
    //   </ListGroup>
    //   <ListGroup className="list-group-flush">
    //     {/* <ListGroup.Item>{result[0].q1_ans}</ListGroup.Item>
    //     <ListGroup.Item>{result[0].q2_ans}</ListGroup.Item>
    //     <ListGroup.Item>{result[0].q3_ans}</ListGroup.Item> */}
    //     <ListGroup.Item>Keyboard Enthusiast</ListGroup.Item>
    //     <ListGroup.Item></ListGroup.Item>
    //     <ListGroup.Item>{result[0].q3_ans}</ListGroup.Item>
    //   </ListGroup>
    // </Card>

  <div id='result'>
    <Card style = {{ width: '18rem' }}>
        <Card.Img src = "https://cdn.discordapp.com/attachments/1017560289589346365/1018290115153514576/avataaars_2.png" />
        <Card.Title>Erik Vasquez</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Eh - ri - ck Vas-que-z</ListGroup.Item>
          <ListGroup.Item>{result[0].pronouns}</ListGroup.Item>

        </ListGroup>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Keyboard Enthusiast</ListGroup.Item>
          <ListGroup.Item>Burgers</ListGroup.Item>
          <ListGroup.Item>Hiking and camping on weekends</ListGroup.Item>
        </ListGroup>
      </Card>
  </div>
  );
}

export default UserCard;
