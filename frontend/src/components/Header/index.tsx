import React from "react";
import HeaderNavigation from "./HeaderNavigation";
import HeaderSearch from "./HeaderSearch";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header px-10 h-16 bg-[#242426] flex justify-between ">
      <HeaderNavigation />
      <HeaderSearch />
    </div>
  );
};

export default Header;
