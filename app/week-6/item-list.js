"use client";
import React, { useState, useEffect } from "react";

const items = require('./items.json');

function ItemList() {
    const[sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if(sortBy === 'name')
        {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category')
        {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    return (
        <div>
            <div className="flex items-center mb-4">
                <label className="center">Sort By:</label>
                <div>
                    <button 
                        onClick={() => setSortBy('name')}
                        className={`p-1 m-2 w-28 ${sortBy === 'name' ? 'bg-orange-500' : 'bg-orange-700'}`}
                    >
                        Name
                    </button>
                    <button 
                        onClick={() => setSortBy('category')}
                        className={`p-1 m-2 w-28 ${sortBy === 'category' ? 'bg-orange-500' : 'bg-orange-700'}`}
                    >
                        Category
                    </button>
                </div>
            </div>
    
            <ul>
                {sortedItems.map((item) => (
                    <li key={item.id} className="bg-gray-900 p-2 shadow-md mb-4 max-w-md ">
                        <span className="text-white text-lg font-bold">
                            {item.name} - {item.category}
                        </span>
                        <p className="text-white">Buy {item.quantity} in {item.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;