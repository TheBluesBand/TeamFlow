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
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return months.map(month => ({
    name: month,
    codeLines: Math.floor(Math.random() * 10000),
    blankLines: Math.floor(Math.random() * 10000),
    commentLines: Math.floor(Math.random() * 10000),
  }));
};

export default function LineGraph({}: Props) {
  const data = generateRandomData();

  const { theme } = useTheme();

  const tooltipStyles = {
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    border: theme === "dark" ? "1px solid #444" : "1px solid #ddd",
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
          stroke="#00FF00"
          dot={false}
        />{" "}
        {/* Green */}
        <Line
          name="Blank"
          type="monotone"
          dataKey="blankLines"
          stroke="#FF0000"
          dot={false}
        />{" "}
        {/* Red */}
        <Line
          name="Comments"
          type="monotone"
          dataKey="commentLines"
          stroke="#0000FF"
          dot={false}
        />{" "}
        {/* Blue */}
      </LineChart>
    </ResponsiveContainer>
  );
}
