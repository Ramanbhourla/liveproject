import React from 'react';

var  time = new Date();
var  hours  = time.getHours();
var  minutes = time.getMinutes();
var  seconds = time.getSeconds();

var getTime = hours +":"+ minutes +":"+ seconds;

const App = () => {
  
  const state = useState();

  const [showTime, fun] = useState(getTime);
  
  function upDate(){
    fun(getTime +":")
  }
 
  return(
    <div className="body">
      <h1>{showTime}</h1>
      <button onClick={upDate}>GET TIME</button>
    </div>
  )
  }
