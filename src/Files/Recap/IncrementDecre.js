import React from 'react';
import { useState } from 'react/cjs/react.development';

const App =() =>{
  const [output, setIncrement] = useState(0);
 
  const Incrementdata =()=>{
     setIncrement(output + 1 )
}

const DecrementData = () =>{
   setIncrement(output - 1)
   if(output < 2){
     alert `Decrement is completed`;
   };
}

return (
  <div className='box'>
     <h1 className='header'> {output}</h1>
    <Button className='btn' onClick={Incrementdata}>increm</Button>
    <button className='btn' onClick={DecrementData}>Decrem</button>
  </div>
)

};