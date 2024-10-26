"use client";
import React, { useState } from "react";

function ItemList({ items }) {
    const [sortBy, setSortBy] = useState('name');

    const groupedItems = () => {
        const grouped = items.reduce((basket, item) => {
        if (!basket[item.category]) {
            basket[item.category] = [];
        }
        basket[item.category].push(item);
        return basket;  
    }, {});
    
    Object.keys(grouped).forEach((category) => {
        grouped[category].sort((a, b) => a.name.localeCompare(b.name));
    });
    return grouped;
    };


    const sortedItems = sortBy === 'grouped-category' ? groupedItems() : [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name); 
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category); 
        }
        return 0;
    });

    return (
        <div className="">
            <h2 className="text-3xl font-bold m-2">Shopping List</h2>
            <div className="flex items-center">
                <div>
                    <label className="center">Sort By:</label>

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

                    <button
                        onClick={() => setSortBy('grouped-category')}
                        className={`p-1 m-2 w-28 ${sortBy === 'grouped-category' ? 'bg-orange-500' : 'bg-orange-700'}`}
                    >
                        Grouped Category
                    </button>
                </div>
            </div>

            <div>
                {sortBy === 'grouped-category' && (
                    <div>
                        {Object.keys(sortedItems)
                        .sort((a, b) => a.localeCompare(b))
                        .map((category) => (
                            <div key={category}>
                                <h3 className="capitalize text-xl">{category}</h3>
                                <ul>
                                    {sortedItems[category].map((item) => (
                                        <li key={item.id} className="p-2 m-4 bg-slate-900 max-w-sm">
                                            <span className="text-xl font-bold">{item.name}</span>
                                            <p className="text-white">Buy {item.quantity} in {item.category}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}

                {sortBy !== 'grouped-category' && (
                    <ul>
                        {sortedItems.map((item) => (
                            <li key={item.id} className="bg-gray-900 p-2 shadow-md mb-4 max-w-sm">
                                <span className="text-white text-lg font-bold">{item.name} - {item.category}</span>
                                <p className="text-white">Buy {item.quantity} in {item.category}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default ItemList;
