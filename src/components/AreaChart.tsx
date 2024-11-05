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

const data = [
  {
    name: "Jan",
    codeAdditions: Math.floor(Math.random() * 5000),
    codeDeletions: Math.floor(Math.random() * 5000),
  },
  {
    name: "Feb",
    codeAdditions: Math.floor(Math.random() * 5000),
    codeDeletions: Math.floor(Math.random() * 5000),
  },
  {
    name: "Mar",
    codeAdditions: Math.floor(Math.random() * 5000),
    codeDeletions: Math.floor(Math.random() * 5000),
  },
  {
    name: "Apr",
    codeAdditions: Math.floor(Math.random() * 5000),
    codeDeletions: Math.floor(Math.random() * 5000),
  },
  {
    name: "May",
    codeAdditions: Math.floor(Math.random() * 5000),
    codeDeletions: Math.floor(Math.random() * 5000),
  },
  {
    name: "Jun",
    codeAdditions: Math.floor(Math.random() * 5000),
    codeDeletions: Math.floor(Math.random() * 5000),
  },
  {
    name: "Jul",
    codeAdditions: Math.floor(Math.random() * 5000),
    codeDeletions: Math.floor(Math.random() * 5000),
  },
  {
    name: "Aug",
    codeAdditions: Math.floor(Math.random() * 5000),
    codeDeletions: Math.floor(Math.random() * 5000),
  },
  {
    name: "Sep",
    codeAdditions: Math.floor(Math.random() * 5000),
    codeDeletions: Math.floor(Math.random() * 5000),
  },
  {
    name: "Oct",
    codeAdditions: Math.floor(Math.random() * 5000),
    codeDeletions: Math.floor(Math.random() * 5000),
  },
  {
    name: "Nov",
    codeAdditions: Math.floor(Math.random() * 5000),
    codeDeletions: Math.floor(Math.random() * 5000),
  },
  {
    name: "Dec",
    codeAdditions: Math.floor(Math.random() * 5000),
    codeDeletions: Math.floor(Math.random() * 5000),
  },
];

export default function AreaChartComponent() {
  const { theme } = useTheme();

  const tooltipStyles = {
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    border: theme === "dark" ? "1px solid #444" : "1px solid #ddd",
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
          stroke="#00FF00"
          fill="#00FF00"
          name="Code Added"
        />{" "}
        {/* Green */}
        <Area
          name="Code Removed"
          type="monotone"
          dataKey="codeDeletions"
          stroke="#FF0000"
          fill="#FF0000"
        />{" "}
        {/* Red */}
      </AreaChart>
    </ResponsiveContainer>
  );
}
