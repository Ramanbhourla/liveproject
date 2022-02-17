import React, { useState } from "react";
import {Link, useHistory, useParams} from 'react-router-dom'
import Images from "./Images";

const Services = () => {
  const [Img, setImg] = useState(Images);
   
  
  return (
    <div className="container">
  <div className="row">
    
      {Img.map((cur, index) => {
        return (
          <div className="col-sm-3">
          <div className="card" key={cur.id}>
            <img src={cur.source} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{cur.tittle} </h5>
              <p className="card-text">let's talk about mortal part</p>
              <Link to={`/services/${cur.tittle}`} className="btn btn-primary">
                Get Detail here
              </Link>
            </div>
          </div>
          </div>
        );
      })}
    
    </div>
    </div>
  );
};

export default Services;
