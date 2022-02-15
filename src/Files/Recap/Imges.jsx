import React from 'react';



const pic1 = 'https://picsum.photos/200/300'
const pic2 = 'https://picsum.photos/300/300'
const pic3 = 'https://picsum.photos/400/300'
const pic4 = 'https://picsum.photos/350/300'

function Imges(){
  return   <div className='imgs'>
    <img src={pic1}></img>
    <img src={pic2}></img>
    <img src={pic3}></img>
    <img src={pic4}></img></div>
}

export default Imges;