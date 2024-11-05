"use client";   
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsdata from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

function Page() {
    const [items, setItems] = useState(itemsdata);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (item) => {
        setItems(prevItems => [...prevItems, item]);
    };

    const handleItemSelect = (item) => {
        const cleanUpName = item.name
            .split(",")[0]
            .trim()
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF]|[\u2011-\u26FF])/g, ''); // Remove emojis and special characters
        setSelectedItemName(cleanUpName);
    };
    

    return (
        <main className="bg-slate-950 p-2 m-2">
            <div className="flex">
                <div className="flex-1 max-w-sm m-2">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="flex-1 max-w-sm m-2">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}
export default Page;