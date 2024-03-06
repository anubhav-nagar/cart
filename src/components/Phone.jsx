import { useState } from "react";
import { useContext } from "react";
import {CartContext} from "../App";
import { TotalContext } from "../App";

const Phone = ( { data } ) => {
    const {cart, setCart} = useContext(CartContext);
    const {total, setTotal} = useContext(TotalContext);

    const [count, setCount] = useState(0);
    function handleAddClick() {
        setCount(count + 1);
        setCart(cart+1);
        console.log(typeof total, typeof data.price)
        setTotal(prevTotal => Math.round((prevTotal + data.price) * 100) / 100);
    }
    function handleRemoveClick() {
        if(count>0){
            setCount(count-1);
            setCart(cart-1);
            setTotal(prevTotal => Math.round((prevTotal - data.price) * 100) / 100);

        }
    }
    
  return (
    <div className="flex justify-around w-full mb-6">
        <div className="flex w-64">
            <img src={data.img} alt="phone" className="w-18 h-20" />
            <div className="self-center">
                <h2>{data.name}</h2>
                <p className="text-gray-400">Price: ${data.price}</p>
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