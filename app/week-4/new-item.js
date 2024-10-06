"use client";
import { useState } from "react";

export default function NewItem() {
    
    const [quantity, setQuantity] = useState(1);

    const increment = () => quantity < 20 && setQuantity(quantity + 1);

    const decrement = () => quantity > 1 && setQuantity(quantity - 1);

    return (
        <div class="p-2 m-4 bg-white text-white w-36">
            <div className="flex justify-between">
                <h1 className="text-black">{quantity}</h1>
                <div class="flex space-x-2">
                    <button className="w-8 bg-blue-500 text-white text-semibold rounded-lg shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed" onClick={increment} disabled={quantity === 20}>+</button>
                    <button className="w-8 bg-blue-500 text-white text-semibold rounded-lg shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed" onClick = {decrement} disabled={quantity === 1}>-</button>
                </div>
            </div>  
        </div>
    );
}
