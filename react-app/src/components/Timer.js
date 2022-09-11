import React, { useEffect, useState, useRef } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function Timer(){
  const intervalRef = useRef(null);
  const [timer, setTimer] = useState('00');
  function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total/1000) % 60);
    const minutes = Math.floor((total/1000/60) %60);
    const hours = Math.floor((total/1000*60*60) %24);
    const days = Math.floor(total/(1000*60*60*24));
    return{
      total, days, hours, minutes, seconds
    }
  }
  function startTimer(deadline){
    let {total, days, hours, minutes, seconds } = getTimeRemaining(deadline);
    if(total>=0){
      setTimer(
        // (hours > 9 ? hours : '0'+hours) + ':' +
        // (minutes > 9 ? minutes : '0'+minutes)+ ':' +
        (seconds > 9 ? seconds : '0'+seconds)
      )
    }else{
      clearInterval(intervalRef.current);
    }
  }

  function clearTimer(endtime){
    setTimer('30');
    if(intervalRef.current) clearInterval(intervalRef.current);
    const id = setInterval(()=>{
      startTimer(endtime);
    }, 1000)
    intervalRef.current = id;
  }

  // set timer
  function getDeadlineTime(){
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds()+30);
    return deadline;
  }
  
  useEffect(() => {
    clearTimer(getDeadlineTime());
    return () => {if(intervalRef.current) clearInterval(intervalRef.current)}
  }, []);

  function onClickResetBtn(){
    clearTimer(getDeadlineTime());
  }

  return(
    <div id="countdown">
      <CountdownCircleTimer
        isPlaying
        duration={7}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}
        size={50}
      >
        {({ timer }) => timer}
      </CountdownCircleTimer>
    </div>

  )
}

export default Timer;