import React from 'react';


const Todolist =(props)=> {
  
  return (
   <div>
   <i className="fas fa-trash-alt" onClick={()=>{ 
            props.onSelect(props.id);
    // we will pass ID in onSelect so we can get which data we have to remove
    // hence whenever the user will click on delet button then the id will we select which is equal to index number 
    // then the function can comparison to id number with index number and which will be match it will remove it ...
    
   }}></i>
   <li> {props.text}</li>
   </div>
   )

   
};


export default Todolist;