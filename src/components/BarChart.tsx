"use client";
import React from "react";
import {
  Bar,
  ResponsiveContainer,
  LineChart,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { BarChart as BarGraph, XAxis, YAxis } from "recharts";

type Props = {};

const data1 = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export default function BarChart({}: Props) {
  const data = [
    { name: "Jan", codeLines: 4000, blankLines: 2400, commentLines: 2400 },
    { name: "Feb", codeLines: 3000, blankLines: 1398, commentLines: 2210 },
    { name: "Mar", codeLines: 2000, blankLines: 9800, commentLines: 2290 },
    { name: "Apr", codeLines: 2780, blankLines: 3908, commentLines: 2000 },
    { name: "May", codeLines: 1890, blankLines: 4800, commentLines: 2181 },
    { name: "Jun", codeLines: 2390, blankLines: 3800, commentLines: 2500 },
    { name: "Jul", codeLines: 3490, blankLines: 4300, commentLines: 2100 },
    { name: "Aug", codeLines: 4000, blankLines: 2400, commentLines: 2400 },
    { name: "Sep", codeLines: 3000, blankLines: 1398, commentLines: 2210 },
    { name: "Oct", codeLines: 2000, blankLines: 9800, commentLines: 2290 },
    { name: "Nov", codeLines: 2780, blankLines: 3908, commentLines: 2000 },
    { name: "Dec", codeLines: 1890, blankLines: 4800, commentLines: 2181 },
  ];

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
        <Tooltip />
        <Legend />
        <Line
          name="Code"
          type="monotone"
          dataKey="codeLines"
          stroke="#00FF00"
        />{" "}
        {/* Green */}
        <Line
          name="Blank"
          type="monotone"
          dataKey="blankLines"
          stroke="#FF0000"
        />{" "}
        {/* Red */}
        <Line
          name="Comments"
          type="monotone"
          dataKey="commentLines"
          stroke="#0000FF"
        />{" "}
        {/* Blue */}
      </LineChart>
    </ResponsiveContainer>
  );
}
