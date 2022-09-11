import React from "react";
import Timer from './Timer';
import UserCard from './UserCard';
import UserPhotos from './UserPhotos';
import Question from './Question';

function GameBoard(){
  
  return(
    <>
      <Question/>
      <Timer/>
      <UserPhotos/>
      <UserCard/>
    </>
  )
}

export default GameBoard;