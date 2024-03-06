import { useState } from "react";
import { useContext } from "react";
import {CartContext} from "../App";

const Phone = ( { data } ) => {
    const {cart, setCart} = useContext(CartContext);
    const [count, setCount] = useState(0);
    function handleAddClick() {
        setCount(count + 1);
        setCart(cart+1);
    }
    function handleRemoveClick() {
        if(count>0){
            setCount(count-1);
            setCart(cart-1);
        }
    }
    
  return (
    <div className="flex justify-around w-full mb-6">
        <div className="flex w-64">
            <img src={data.img} alt="phone" className="w-18 h-20" />
            <div className="self-center">
                <h2>{data.name}</h2>
                <p>Price: {data.price}</p>
            </div>
        </div>
        <div className="flex self-center">
            <button className="rounded-full bg-blue-300 w-8 h-8 mr-3 align-middle" onClick={handleRemoveClick}>-</button>
            <p className="self-center w-4  ">{count}</p>
            <button className="rounded-full bg-blue-300 w-8 h-8 ml-3" onClick={handleAddClick}>+</button>
        </div>
    </div>
  );
}

export default Phone;