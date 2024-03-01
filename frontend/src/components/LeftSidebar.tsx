import React from "react";
import Profile from "@/components/Sidebar/Profile";
import Navigation from "@/components/Sidebar/Navigation";
import MyPlaylists from "@/components/Sidebar/MyPlaylists";

type Props = {};

const LeftSidebar = ({}: Props) => {
  return (
    <div className=" bg-foreground w-10">
      <Profile />
      <Navigation />
      <MyPlaylists />
    </div>
  );
};

export default LeftSidebar;
