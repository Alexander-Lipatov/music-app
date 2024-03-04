import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

type Props = {};

const HeaderSearch = (props: Props) => {
  return (
    <div className="search flex items-center gap-3">
      <input
        type="text"
        placeholder="Что будем искать?"
        className="bg-transparent border border-solid border-[#7f7f7f] rounded-xl px-5 py-1"
      />
      <Button className=" rounded-full w-9 h-9 p-0 bg-[#19CBA6] hover:bg-black">
        <Search />
      </Button>
    </div>
  );
};

export default HeaderSearch;
