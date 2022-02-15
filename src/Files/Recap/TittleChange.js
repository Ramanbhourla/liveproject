import React, { createContext, useEffect, useState } from 'react';



const App =()=>{
    const [num, setnum] =useState(0);

    useEffect(()=>{
    // alert`i am clicked`;
    document.title = `I am clicked ${num}`
    });
    
    const AddNumber =()=>{
        setnum(num + 1);
    }

 return(<div>
    
    <button onClick={AddNumber}>Click me {num}</button>
 </div>
 )
} 

