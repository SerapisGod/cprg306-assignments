"use client";

import { useState } from "react";
import NewItem from "./new-item";

export default function NewItemPage() {
    return (
        <div className="flex justify-center w-full">
            <div>
                <NewItem />
            </div>
        </div>
    );
}