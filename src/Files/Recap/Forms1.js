import React from "react";
import { useState } from "react/cjs/react.development";


const App = () =>{

const [fullName, fullNamefun] = useState({
      fName : "",
      lName : "",
      email : "",
      Number: "",
    });


const InputEvent =(e) =>{
    console.log(e.target.value)
    console.log(e.target.name)
   
    const value = e.target.value;
    const name = e.target.name;
    
    fullNamefun((previousVal)=>{

      if(name ==='fName'){
          return{
            fName : value.toUpperCase(),
            lName : previousVal.lName,
            email : previousVal.email,
            Number: previousVal.Number,
          }
           
      }else if(name === 'lName'){
          return{
            fName : previousVal.fName,
            lName : value.toUpperCase(),
            email : previousVal.email,
            Number: previousVal.Number,
          }
      }
      else if(name === 'email'){
        return{
          fName : previousVal.fName,
          lName : previousVal.lName,
          email : value,
          Number: previousVal.Number,
        }
    }else if(name === 'Number'){
        return{
          fName : previousVal.fName,
          lName : previousVal.lName,
          email : previousVal.email,
          Number: value,
        }
    }
    });

}
 const submitData =() =>{
   alert('Data has been submit')
 }


    return( 
      
     <div className="body">
     <div className="box">
     <h2>HELLO {fullName.fName} {fullName.lName}</h2>
     <p>{fullName.email} </p>
     <p><mark> {fullName.Number}</mark></p>
     <p></p>
     <input placeholder="first name" onChange={InputEvent} name="fName" value={fullName.fName}/><br></br><br></br>
     <input placeholder="last name" onChange={InputEvent} name="lName" value={fullName.lName}/><br></br><br></br>
      <input placeholder="email" name="email" value={fullName.email} onChange={InputEvent}  autoComplete="off"/><br></br><br></br>
      <input placeholder="number" name="Number" value={fullName.Number} onChange={InputEvent} autoComplete="off"/><br></br><br></br>
     <button type="submit"  className="btn" onClick={submitData}>click me</button></div>
     </div>
    )
  
};



