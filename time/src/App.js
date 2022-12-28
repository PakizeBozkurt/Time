import React, { useState } from 'react';
import "./index.css";



function App() {

  const now = new Date().toLocaleTimeString();
  
  const [time, setTime] = useState(now);

function updateTime() {
  const newTime = new Date().toLocaleTimeString();
setTime(newTime);
}

  return (
    <div className='time'>
    <h1>{time}</h1>
     <button className='get' onClick={updateTime}>Get Time</button> 
    </div>
  )
}

export default App;
