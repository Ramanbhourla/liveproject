import React from "react";
import { FcLike } from "react-icons/fc";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  const history = useHistory();

  const goToservices = () => {
    history.push("services");
  };
  return (
    <div className="home">
      <img src={"images/pic2.jpg"} className="pic" alt="..." />
      <h1>
        <b className="tittle"> Grow your Self with </b>
        <br />
        <strong className="BrandName"> BhourlaDevelopment</strong>
      </h1>
      <p>
        <b>
          Thanks for being here...
          <FcLike />
        </b>
        </p>
        <br />
        <p className="paragraph">
          <p>"This is a world where you will learn about your innerself.
        
            We will give you a path where you will find the actual meaning of
            LIFE.
          Come with us and we will send you away from mortal body...
          You wll definatily find THE SECRETS OF YOUR LIFE"</p>
        </p>
      
      <br />
      <button className="button" onClick={goToservices}>
        Lets Start Together
      </button>

      <footer className="footer">
        © BhourlaDevelopment LTD 2022 All Rights Reserved
      </footer>
    </div>
  );
};

export default Home;
