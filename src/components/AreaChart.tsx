"use client";
import { useTheme } from "next-themes";
import React from "react";
import {
  Bar,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Area,
  AreaChart,
} from "recharts";
import { XAxis, YAxis } from "recharts";

const generateGitHubData = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = [];
  let baseAdditions = 100;
  let baseDeletions = 50;

  for (let i = 0; i < 12; i++) {
    const additions = baseAdditions + Math.floor(Math.random() * 500);
    const deletions = baseDeletions + Math.floor(Math.random() * 300);

    data.push({
      name: months[i % months.length],
      codeAdditions: additions,
      codeDeletions: deletions,
    });

    // Simulate trends: more additions at the beginning, more deletions later
    baseAdditions = Math.max(
      500,
      baseAdditions - Math.floor(Math.random() * 100)
    );
    baseDeletions = Math.min(
      1000,
      baseDeletions + Math.floor(Math.random() * 100)
    );
  }

  return data;
};

const data = generateGitHubData();

export default function AreaChartComponent() {
  const { theme } = useTheme();

  const tooltipStyles = {
    backgroundColor: theme === "dark" ? "#fff" : "#333",
    color: theme === "dark" ? "#000" : "#fff",
    border: theme === "dark" ? "1px solid #ddd" : "1px solid #444",
    borderRadius: "8px",
  };

  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <AreaChart data={data}>
        <XAxis
          dataKey={"name"}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip contentStyle={tooltipStyles} />
        <Legend />
        <Area
          type="monotone"
          dataKey="codeAdditions"
          stroke="#43BA6E"
          fill="#43BA6E"
          name="Code Additions"
        />{" "}
        {/* Green */}
        <Area
          name="Code Subtractions"
          type="monotone"
          dataKey="codeDeletions"
          stroke="#EA4335"
          fill="#EA4335"
        />{" "}
        {/* Red */}
      </AreaChart>
    </ResponsiveContainer>
  );
}
