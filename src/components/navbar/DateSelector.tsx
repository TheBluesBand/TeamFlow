import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

/**
 * A component that allows users to select a date range.
 *
 * @component
 * @returns {JSX.Element} The DateSelector component.
 * @example
 * return (
 *   <DateSelector />
 * )
 */

const DateSelector = () => {
  const [selected, setSelected] = useState("Today");
  const { theme } = useTheme();

  const options = ["Today", "This Week", "This Month"];

  return (
    <div className="flex space-x-4">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          className={cn(
            "px-2 py-1 text-sm font-semibold rounded-md transition-colors",
            selected === option
              ? theme === "dark"
                ? "bg-gray-700 border border-gray-600 shadow-sm text-white"
                : "bg-gray-100 border border-gray-300 shadow-sm text-black"
              : theme === "dark"
              ? "text-gray-400"
              : "text-gray-600"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default DateSelector;
