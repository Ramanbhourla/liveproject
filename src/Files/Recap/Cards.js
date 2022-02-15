import React from 'react';


function Cards(props){
      
    return (


 <div className="ui card">
 <div className="image">
   <img src={props.imgsrc}/>
 </div>
 <div className="content">
   <a className="header">{props.name}</a>
   <div className="meta">
     <span className="date">Joined in 2002</span>
   </div>
   <div className="netflix">
     NETFLIX ORIGINAL SERIES
   </div>
 </div>
 <div className="extra content">
   <a href={props.links}>
  <button>WATCH NOW</button>
   </a>
 </div>
</div>
    )
}

export default Cards;