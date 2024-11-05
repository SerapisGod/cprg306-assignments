"use client";
import { useState } from "react";

export default function DogForm({onAddDog}) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newId = Math.floor(Math.random() * 100000);
        const newDog = { id: newId, name, age };
        onAddDog(newDog);
    };

    return (
        <div>
            <h2>Add Dog</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nameInput">Name</label>
                    <input
                        id="nameInput"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="text-black" 
                    />
                </div>
                <div>
                    <label htmlFor="ageInput">Age</label>
                    <input
                        id="ageInput"
                        type="number"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                        className="text-black"  
                    />
                </div>
                <button type="submit">Add Dog</button>
            </form>
        </div>
    );
}