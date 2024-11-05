"use client";
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { BarChart as BarGraph, XAxis, YAxis } from "recharts";
import { useTheme } from "next-themes";

type Props = {};

const generateRandomData = () => {
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
  let baseValue = 100;

  for (let i = 0; i < 12; i++) {
    data.push({
      name: months[i % months.length],
      codeLines: baseValue + i * 100 + Math.floor(Math.random() * 50),
      blankLines: baseValue + i * 80 + Math.floor(Math.random() * 40),
      commentLines: baseValue + i * 60 + Math.floor(Math.random() * 30),
    });
  }

  return data;
};

const data = generateRandomData();

export default function LineGraph({}: Props) {
  const { theme } = useTheme();

  const tooltipStyles = {
    backgroundColor: theme === "dark" ? "#fff" : "#333",
    color: theme === "dark" ? "#000" : "#fff",
    border: theme === "dark" ? "1px solid #ddd" : "1px solid #444",
    borderRadius: "8px",
  };

  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey={"name"}
          tickLine={false}
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
        <Line
          name="Code"
          type="monotone"
          dataKey="codeLines"
          stroke="#66bb6a"
          dot={false}
        />{" "}
        {/* Green */}
        <Line
          name="Blank"
          type="monotone"
          dataKey="blankLines"
          stroke="#EA4335"
          dot={false}
        />{" "}
        {/* Red */}
        <Line
          name="Comments"
          type="monotone"
          dataKey="commentLines"
          stroke="#2563EB"
          dot={false}
        />{" "}
        {/* Blue */}
      </LineChart>
    </ResponsiveContainer>
  );
}
