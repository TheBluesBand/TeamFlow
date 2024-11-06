import { LucideIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

export type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  description: string;
  backgroundcolor?: string;
  textColor?: string;
};

export default function Card(props: CardProps) {
  const textColor = props.textColor || "text-white";

  return (
    <CardContent backgroundcolor={props.backgroundcolor}>
      <section className="flex justify-between gap-2">
        {/* label */}
        <p className={cn("text-sm", textColor)}>{props.label}</p>
        {/* icon with grey circle */}
        <div
          className="flex items-center justify-center h-8 w-8 rounded-full flex-shrink-0"
          style={{ backgroundColor: "rgba(128, 128, 128, 1)" }}
        >
          <props.icon className="h-4 w-4 text-grey-400" />
        </div>
      </section>
      <section className="flex flex-col gap-1">
        <h2 className={cn("text-2xl font-semibold", textColor)}>
          {props.amount}
        </h2>
        <p className={cn("text-xs", textColor)}>{props.description}</p>
      </section>
    </CardContent>
  );
}

export function CardContent(
  props: React.HTMLAttributes<HTMLDivElement> & { backgroundcolor?: string }
) {
  const backgroundColorWithOpacity = props.backgroundcolor
    ? `${props.backgroundcolor}DD` // Add opacity to the background color
    : "rgba(52, 52, 52, 0.87)"; // Default background color with opacity

  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
        props.className
      )}
      style={{ backgroundColor: backgroundColorWithOpacity }} // Set background color
    />
  );
}
//2D2D2D
