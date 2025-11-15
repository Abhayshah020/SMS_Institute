"use client";

import { useState } from "react";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function WorkWeekCalendar({ onSelectDate }: { onSelectDate: (date: string) => void }) {
    const [selectedDate, setSelectedDate] = useState<string>("");

    // Generate the next 14 days (or any range you want)
    const generateDates = () => {
        const dates: { date: Date; disabled: boolean }[] = [];
        const today = new Date();
        for (let i = 0; i < 14; i++) {
            const d = new Date();
            d.setDate(today.getDate() + i);
            // Disable if it's Saturday
            const disabled = d.getDay() === 6;
            dates.push({ date: d, disabled });
        }
        return dates;
    };

    const handleSelect = (date: Date) => {
        setSelectedDate(date.toISOString().split("T")[0]);
        onSelectDate(date.toISOString().split("T")[0]);
    };

    return (
        <>
            <label className="block text-gray-700 font-medium">Available Start Date</label>
            <div className="grid grid-cols-7 gap-2">
                {generateDates().map(({ date, disabled }) => (
                    <button
                        key={date.toISOString()}
                        onClick={() => !disabled && handleSelect(date)}
                        disabled={disabled}
                        className={`
                            px-3 py-2 rounded-lg
                            ${disabled ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-blue-100 hover:bg-yellow-300"}
                            ${selectedDate === date.toISOString().split("T")[0] ? "bg-yellow-400 text-white" : ""}
                        `}
                    >
                        {date.getDate()}
                        <div className="text-xs">{weekdays[date.getDay()]}</div>
                    </button>
                ))}
            </div>
        </>
    );
}
