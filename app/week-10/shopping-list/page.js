"use client";   
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { getItems, addItem } from "../_services/shopping-list-service";

function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const { user } = useUserAuth();
    const router = useRouter();

    const loadItems = async () => {
        try {
            if (user && user.uid) {
                const fetchedItems = await getItems(user.uid); 
                setItems(fetchedItems); 
            }
        } catch (error) {
            console.error("Error loading items:", error);
        }
    };

    useEffect(() => {
        if (!user) {
            router.push("/week-10"); 
        } else {
            loadItems();
        }
    }, [user, router]);

    if (!user) {
        return null; 
    }

    const handleAddItem = async (newItem) => {
        try {
            if (user && user.uid) {
                const newItemId = await addItem(user.uid, newItem); 
                setItems(prevItems => [...prevItems, { id: newItemId, ...newItem }]);
            }
        } catch (error) {
            console.error("Error adding item:", error);
        }
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