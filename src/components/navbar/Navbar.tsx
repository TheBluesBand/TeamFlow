import { ArrowUpRight, User } from "lucide-react";
import UserAvatar from "./UserAvatar";
import React from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../ui/menubar";
import DateSelector from "./DateSelector";
import { ThemeToggle } from "./ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = (props: any) => {
  const user = {
    name: "John Doe",
    image: "https://github.com/shadcn.png",
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4">
        {/* Menubar */}
        <div className="flex justify-center w-full">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <ArrowUpRight className="h-5 w-5" />
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarSeparator />
            <MenubarMenu>
              <MenubarTrigger>Home</MenubarTrigger>
            </MenubarMenu>
            <MenubarSeparator />
            <MenubarMenu>
              <MenubarTrigger>About Us</MenubarTrigger>
            </MenubarMenu>
            <MenubarSeparator />
            <MenubarMenu>
              <MenubarTrigger>Support</MenubarTrigger>
            </MenubarMenu>
          </Menubar>

          {/* ThemeToggle */}
          <div className="absolute right-8 flex items-center space-x-4">
            <DateSelector />
            <ThemeToggle />
            <UserAvatar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
