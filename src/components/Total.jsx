import { TotalContext } from "../App";
import { useContext } from "react";
import { CartContext } from "../App";

const Total = () => {
    const {total, setTotal} = useContext(TotalContext);
    const {cart, setCart} = useContext(CartContext);
    function handleClearButton(){
        setTotal(0);
        setCart(0);
    }
    return (
        <div>
            <div className="mx-64 mb-6"><hr /></div>
            <div className="flex justify-around w-full text-xl">
                <h2>Total</h2>
                <h2>${total}</h2>
            </div>
            <div className="flex justify-center mt-4 mb-12 text-md">
                <button className="bg-blue-100 p-2 rounded-lg" onClick={handleClearButton}>Clear Cart</button>
            </div>
        </div>
    )
}

export default Total;