"use client";   
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsdata from "./items.json";
import { useState } from "react";

function Page() {
    const [items, setItems] = useState(itemsdata);

    const handleAddItem = (item) => {
        setItems(prevItems => [...prevItems, item]);
    };

    return (
        <main className="bg-slate-950 m-4">
            < NewItem onAddItem={handleAddItem} />
            < ItemList items= {items}/>
        </main>
    );
}
export default Page;