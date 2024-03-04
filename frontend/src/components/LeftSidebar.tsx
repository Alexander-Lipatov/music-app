import React from "react";
import Profile from "@/components/Sidebar/Profile";
import Navigation from "@/components/Sidebar/Navigation";
import MyPlaylists from "@/components/Sidebar/MyPlaylists";
import { Separator } from "./ui/separator";

type Props = {};

const LeftSidebar = ({}: Props) => {
  return (
    <div className="sidebar w-48 h-full bg-black shadow-md border-r border-solid border-[#313131] z-10">
      <Profile />
      <Separator className="bg-[#313131]" />
      <Navigation />
      <div className="main-nav"></div>
    </div>
  );
};

export default LeftSidebar;
