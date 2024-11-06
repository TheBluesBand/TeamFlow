import { Meta, StoryObj } from "@storybook/react";
import Card from "../components/card";
import { Plus, Minus, DollarSign } from "lucide-react";
import "../app/globals.css";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    label: "Total Revenue",
    icon: DollarSign,
    amount: "$12,345",
    description: "Last Month",
    backgroundcolor: "bg-blue-500",
    textColor: "text-white",
  },
};

export const Secondary: Story = {
  args: {
    label: "New Users",
    icon: Plus,
    amount: "1,234",
    description: "This Week",
    backgroundcolor: "bg-green-500",
    textColor: "#880b0b",
  },
};

export const Negative: Story = {
  args: {
    label: "Lost Customers",
    icon: Minus,
    amount: "-23",
    description: "Today",
    backgroundcolor: "bg-red-500",
    textColor: "text-white",
  },
};
