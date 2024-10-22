"use client";

import React from "react";
import { Nav } from "./nav";
import { Home, Folder, FileCode, SettingsIcon, Plus } from "lucide-react";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24 flex flex-col justify-center">
      <Nav
        isCollapsed={true}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: Home,
            variant: "default",
          },
          {
            title: "Repositories",
            href: "/users",
            icon: Folder,
            variant: "ghost",
          },
          {
            title: "Files",
            href: "/orders",
            icon: FileCode,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/settings",
            icon: SettingsIcon,
            variant: "ghost",
          },
          {
            title: "Add Page",
            href: "/add-page",
            icon: Plus,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
