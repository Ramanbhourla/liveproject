import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'

const App = () => {
  const [Apidata, setApiData] = useState([]);

  useEffect(() => { 
    CovidApi();
  }, []);

  const CovidApi = async () => {
    const data = await fetch("https://data.covid19india.org/data.json");
    const GetApi = await data.json();
    // console.log(GetApi.statewise);
    setApiData(GetApi.statewise);
  };
  console.log(Apidata);  

  return (
    <div>
        <h1 className="header">INDIAN Covid19 Tracker</h1>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">State</th>
            <th scope="col">Total Cases</th>
            <th scope="col">Total Deaths</th>
            <th scope="col">Total Recovers</th>
          </tr>
        </thead>
        <tbody>
          {Apidata.map((curval, index) => {
            return (
              <tr>
                <th scope="row">{curval.state}</th>
                <td>{curval.confirmed}</td>
                <td>{curval.deltadeaths}</td>
                <td>{curval.recovered}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

