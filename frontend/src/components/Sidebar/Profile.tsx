import React from "react";
import Image from "next/image";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="profile flex justify-center items-center flex-col gap-3 my-5">
      <div className="avatar ">
        <Image
          src={"https://i.pravatar.cc/300"}
          className="rounded-full border border-solid border-[#313131]"
          width="75"
          height="75"
          alt=""
        />
      </div>
      <div className="display-name flex flex-col items-center">
        <span>Alexander</span>
        <span>Lipatov</span>
      </div>
    </div>
  );
};

export default Profile;
