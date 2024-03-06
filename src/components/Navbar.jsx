import cart1 from "../assets/images/cart1.jpg";
import { useContext } from "react";
import { CartContext } from "../App";

const Navbar = () => {
    const {cart, setCart} = useContext(CartContext);
  return (
    <>
      <div className="bg-slate-700 text-slate-50 p-5 flex justify-around items-center">
        <h1 className="text-3xl" >Shopeasy</h1>
        <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="file: mt-4 h-10 w-10 pb-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <div className="w-8 h-8 text-center pt-[4px] rounded-full -ml-4 bg-slate-400">{cart}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
