"use client";

import DogList from "./dog-list.js";
import DogForm from "./dog-form.js";
import dogData from "./dog-data.json";
import { useState } from "react";

export default function Page() { 

    const [dogs, setDogs] = useState(dogData);

    const addDog = (dog) => {
        setDogs([...dogs, dog]);
    }
    const deleteDog = (id) => {
        setDogs(dogs.filter((dog) => dog.id !== id));
    };

    return (
        <div>
            <h1>Testing</h1>
                <h2>Manage Dogs</h2>
                <DogList dogs = {dogs} onDelete={deleteDog} />
                <DogForm onAddDog={addDog}/>
            
        </div>
    );
}   