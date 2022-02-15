import React from "react";

const Home = (props) => {
  console.log("home", props.kuchbhi);
  return (
    <div>
      <h1>HOME CONTAINERS</h1>
      <div className="Cart">{props.kuchbhi.length}</div>
      <button onClick={() => props.AddtocardHandler({ name: "ramandeep" })}>
        Add_cart
      </button>
      <br></br>
      <button onClick={() => props.RemoveCartHandler()}>Remove_Cart</button>
    </div>
  );
};

export default Home;
