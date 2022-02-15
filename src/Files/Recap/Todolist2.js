import React from 'react';
import { useState } from 'react/cjs/react.develper';



const App =() =>{
  
  const [listElement, setListElement] = useState("");
  const [list, setList] = useState([]);


  const getNote =(e)=>{
    setListElement( e.target.value)
  }

  const addNote=()=>{
  setList((olddata)=>{
      return [ ...olddata, listElement.toUpperCase()]
  });
  setListElement(""); 
}

const deletItem =(id) =>{
    console.log(id);
   setList((olddata)=>{
     return olddata.filter((arrelement,index)=>{ //whenever user will click on delet buton then we will get id and current text data will get in (arrelement) 
                                                //  and then if its id number and (index number) will match by filter we will remove it from olddata...
                                                //  id !== index mean which is not equal only that olddata will return and which will match that will be remove...
                                                // we have passed id within onClick onSelect(id) that id we will get in parameter;
            return index !== id ;               
     })
   })
}
  return(
    <div className='body'>
      <div className='Box'>
      <div className='header'>
      <input id='inputNote' onChange={getNote}  autoComplete='off' value={listElement}></input>
      <button className='btn' onClick={addNote}><b>+</b></button></div>
      <div><ol className='list'>
       {
         list.map((curentvalue, index)=>{
           return(
            <div>
           <Todolist text = {curentvalue}
            key= {index}
            id = {index} 
            onSelect= {deletItem}/>
            </div>

           )
         })
       }
      </ol></div> 
      </div>

    </div>
  )



};

