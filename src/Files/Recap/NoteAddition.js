import React from 'react';

const NoteAddition = (props)=>{
 

const DeletData = () =>{
  props.DeletNote(props.id);
}


return (
    <div className='NoteArea2'>
        <h3>{props.tittle}</h3><br></br>
        <p>{props.textarea}</p>
        <button type="button" className="btn-close" aria-label="Close" onClick={DeletData}></button>
        {/* <button className='btn' onClick={DeletData}>➖</button> */}
    </div>
)


}

export {NoteAddition};