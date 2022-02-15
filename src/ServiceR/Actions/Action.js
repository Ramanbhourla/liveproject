import { Add_cart } from "../Constants";
import { Remove_Cart } from "../Constants";

const AddTocart = (data) => {
  // console.log('action',data)
  return {
    type: Add_cart,
    data: data,
  };
};

const RemoveTocart = (data) => {
  // console.log('action',data)
  return {
    type: Remove_Cart,
    data: data,
  };
};
export { AddTocart, RemoveTocart };
