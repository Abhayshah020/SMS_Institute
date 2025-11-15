"use client";

import { useState } from "react";

interface SelectTypes {
    value: string
    label: string
    options: string[]
    onSelect: (data: string) => void
}

export default function CustomSelect({ value, label, options, onSelect }: SelectTypes) {
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    return (
        <div className="relative">
            <label className="block text-gray-700 font-medium mb-2">
                {label}
            </label>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setIsSelectOpen(!isSelectOpen)
                }}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-left flex justify-between items-center hover:border-yellow-400 focus:ring-2 focus:ring-yellow-300 outline-none"
            >
                {value || "Choose a program"}
                <span className="ml-2">&#9662;</span>
            </button>
            {isSelectOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                    {options.map((program) => (
                        <li
                            key={program}
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                onSelect(program)
                            }}
                            className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                        >
                            {program}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
