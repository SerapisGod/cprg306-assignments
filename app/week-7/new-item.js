"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {

    const [name , setName] = useState("");
    const [category, setCategory] = useState("produce");
    const [quantity, setQuantity] = useState(1);
    const generateId = () => Math.random().toString(36).substr(2, 9);

    const handleSubmit = (e) => 
        {
        e.preventDefault();

        const item = {
            name,
            category,
            quantity,
            id: generateId()
        };
        
        onAddItem(item);

        setName("");
        setCategory("produce");
        setQuantity(1);
        };

    const increment = (e) => {
        e.preventDefault();
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = (e) => {
        e.preventDefault();
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
            <form className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
                
                <div className="mb-2">
                    <input id="nameInput" type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg" placeholder="Item name" />
                </div>

                <div className="flex justify-between">
        
                    <div className="flex justify-between p-2 mt-1 mb-1 rounded-md bg-white text-white w-36">
                        <h1 className="text-black">{quantity}</h1>
                        <div className="flex space-x-2">
                            <button className="w-8 bg-blue-500 text-white text-semibold rounded-lg shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed" onClick={increment} disabled={quantity === 20}>+</button>
                            <button className="w-8 bg-blue-500 text-white text-semibold rounded-lg shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed" onClick = {decrement} disabled={quantity === 1}>-</button>
                        </div>
                    </div>  

                    <select id="categoryInput" className="ml-1 border-2 border-grey-300 p-2 rounded-lg w-36" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value=""disabled>Category</option>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen">Frozen</option>
                        <option value="canned">Canned</option>
                        <option value="cleaning">Cleaning</option>
                        <option value="dry">Dry</option>
                        <option value="beverage">Beverage</option>
                        <option value="snacks">Snacks</option>  
                        <option value="other">Other</option>
                    </select>

                </div>

                <div>
                    <button type="submit" className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={handleSubmit}>+</button>
                </div>
            </form>
    );
}

