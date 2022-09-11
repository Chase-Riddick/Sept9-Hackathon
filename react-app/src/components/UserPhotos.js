import React from 'react';
import { useDataContext } from '../context/DataContext';
import { Card } from 'react-bootstrap';

function UserPhotos(){
  const { userData } = useDataContext();
  let data = userData['1'].teammates;
  const teammates = [];

  for(const teammate of data){
    teammates.push(teammate);
  }

  let images = [];

  for(const teammate of teammates){
    images.push(teammate.img_url);
  }

  const userImages = images.map((image) => {
    return (
      <Card style = {{ width: '18rem' }}>
        <Card.Img src = {image}/>
      </Card>
    );
  })

  return userImages;
}
export default UserPhotos;
