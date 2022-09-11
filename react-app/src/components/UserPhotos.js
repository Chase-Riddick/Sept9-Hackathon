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

  // let images = [];

  // for(const teammate of teammates){
  //   images.push(teammate.img_url);
  // }
  const images = [
    'https://cdn.discordapp.com/attachments/1017560289589346365/1018290114591473736/avataaars.png',
    'https://cdn.discordapp.com/attachments/1017560289589346365/1018290114927001641/avataaars_1.png',
    'https://cdn.discordapp.com/attachments/1017560289589346365/1018290115153514576/avataaars_2.png',
    'https://cdn.discordapp.com/attachments/1017560289589346365/1018290115405164564/avataaars_3.png',
    'https://cdn.discordapp.com/attachments/1017560289589346365/1018290115669401710/avataaars_4.png'
  ]

  const userImages = images.map((image) => {
    return (
      <Card style = {{ width: '18rem' }}>
        <Card.Img src = {image}/>
      </Card>
    );
  })

  return(
    <div id="photos">
      {userImages}
    </div>
  )
}
export default UserPhotos;
