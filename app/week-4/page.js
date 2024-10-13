"use client";

import { useState } from "react";
import NewItem from "./new-item";


export default function NewItemPage() {
    return (
        <main className="flex justify-center w-full">
            <div>
                <NewItem />
            </div>
        </main>
    );
}