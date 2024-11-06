import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menubar";
import DateSelector from "./DateSelector";
import { ThemeToggle } from "./ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = (props: any) => {
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
              <MenubarTrigger>Home</MenubarTrigger>
              <MenubarTrigger>About Us</MenubarTrigger>
              <MenubarTrigger>Support</MenubarTrigger>
            </MenubarMenu>
          </Menubar>

          {/* ThemeToggle */}
          <div className="absolute right-8 flex items-center space-x-4">
            <DateSelector />
            <ThemeToggle />
            <Avatar className="w-10 h-10 rounded-full">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>PP</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
