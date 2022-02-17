import React from "react";
import { FcLike } from "react-icons/fc";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Home = () => {
  const history = useHistory();

  const goToservices = () => {
    history.push("services");
  };
  return (
    <div>
    
    <div className="home">
      <img
        src={"https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
        className="pic"
        alt="..."
      />
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
        <p>
          "This is a world where you will learn about your innerself. We will
          give you a path where you will find the actual meaning of LIFE. Come
          with us and we will send you away from mortal body... You wll
          definatily find THE SECRETS OF YOUR LIFE"
        </p>
      </p>

      <br />
      <button className="button" onClick={goToservices}>
        Lets Start Together
      </button>

      <footer className="footer">
        © BhourlaDevelopment LTD 2022 All Rights Reserved
      </footer>
    </div>
    </div>
  );
};

export default Home;
