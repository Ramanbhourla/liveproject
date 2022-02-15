import React, { useState } from 'react';
import { Header } from './Recap/Noteheader';
import { Notearea } from './Recap/Notearea';
import {NoteAddition} from './Recap/NoteAddition'


const App = () =>{
    const [newNote, setNewNote] = useState([]);


    const AddNote =(Note)=>{

    setNewNote((previousNote)=>{
        return [...previousNote, Note]
        })

    }
// console.log(newNote)

    const RemoveNote =(id)=>{
    // console.log(id)
        setNewNote((previousdata)=>
        previousdata.filter((curdata,indx)=>{
           return indx !== id ;
            })
        )
    // filter method wil return that data which index number will not equal to id AND which will match it will remove 
    }


    return (<div>
        <Header />
        <Notearea passNote={AddNote} /><br></br>
        {
         newNote.map((curelem,index)=>{
            return <NoteAddition key={index}
              id={index}
              tittle={curelem.tittle}
              textarea = {curelem.textarea}
              DeletNote = {RemoveNote}/>
         })
        }
        </div>
    )
};


