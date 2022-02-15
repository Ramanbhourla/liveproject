import React, { useEffect, useRef, useState } from 'react';
import { SiKofi } from "react-icons/si";

const Uncontrolled =()=>{
    // const [getmail, setMail] = useState({ Email : "" , password : ""})

    const Email = useRef()
    const password= useRef(null)
    const button = useRef()
    

    // const getEmai = (e)=>{
    //      const name = e.target.name
    //      const value = e.target.value

    //      setMail({ ...getmail,
    //            [name ]: value
    //      })
         
    // }

    const HoldValue = ()=>{
       alert(Email.current.value)
       //we can check here what teh value hold by the useRefs....it persist the value 
    }

    useEffect(()=>{
        Email.current.focus()
    },[])
    
    const nextInput =(e)=>{
        if(e.type === "Enter"){
            password.current.focus()
        } 
    }

    const NextInput2 =(e)=>{
    if (e.type === "Enter"){
       button.current.focus()
    }

    }
   
    return (
        <div>
        <form className='form' > 
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" ref={Email} onKeyDown={nextInput} autoComplete='on' name='Email' /*onChange={getEmai}*//>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" ref={password} onKeyDown={NextInput2} name='password' /*onChange={getEmai}*//>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" id='button' ref={button}>Submit</button>
      </form>
      <div><button onClick={HoldValue}> Render value</button>
       </div><div><h1>< SiKofi/></h1></div></div>
    )
}
export default Uncontrolled;