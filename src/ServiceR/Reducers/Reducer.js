import { Add_cart, Remove_Cart } from "../Constants";

const initialState = {
  cardData: [],
};
//we will creat a function and always get two parameters fisrt our creat value and action value ...which will get from action
const cardItems = (state = [], action) => {
  switch (action.type) {
    case Add_cart:
      // console.log('reducer', action)
      return [...state, { cardData: action.data }];
    case Remove_Cart:
      // console.log("reducer", action);
      state.pop();
      return [...state];
    default:
      return state;
  }
};

export default cardItems;
