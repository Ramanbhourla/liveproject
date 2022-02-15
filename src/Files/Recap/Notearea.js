import React, { useState }  from "react";


const Notearea =( props)=>{
    const [Note, setNote] = useState({
        tittle: "",
        textarea: "",
    });
  

    const Getnote =(e)=>{
    const value = e.target.value;
    const name = e.target.name;

    setNote((previousval)=>{
        return {
             ...previousval,
              [name]: value,
            }
        })
    // console.log(Note)
    };

    const Addevent =()=>{
        props.passNote(Note);
        setNote({
            tittle: "",
            textarea : "",
        })
    }

    return(
        <div className="NoteArea">
            <input placeholder="Tittle" name="tittle" className="input" onChange={Getnote} id="input" autoComplete="off"></input>
            <textarea placeholder="write Note here..." name="textarea" rows={9} className="textArea" onChange={Getnote}></textarea>
            <button className="btn" onClick={Addevent}>➕</button>
        </div>
    )


}
export {Notearea};