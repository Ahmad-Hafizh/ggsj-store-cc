import axios from "axios";
import Image from "next/image";
import React from "react";

interface ITeam {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
const getTeam = async () => {
  const res = await axios.get(
    "https://randomuser.me/api/?results=10&inc=name,email,phone,picture&noinfo",
  );
  return res.data.results;
};

const TeamList = async () => {
  const teams: ITeam[] = await getTeam();
  return (
    <div className="w-full border-b-2 py-10">
      <div
        id="wrapper"
        className="grid w-full grid-cols-2 gap-x-6 gap-y-10 overflow-x-hidden lg:grid-cols-4"
      >
        {teams.map((e, i) => (
          <div className="flex w-full flex-col gap-2" key={i}>
            <div className="relative aspect-square w-full">
              <Image
                src={e.picture.large}
                fill
                alt="profile picture"
                className="object-cover"
              />
            </div>
            <p className="text-wrap text-2xl">{`${e.name.first} ${e.name.last}`}</p>
            <div>
              <p className="text-wrap text-sm">{e.phone}</p>
              <p className="text-wrap text-sm">{e.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamList;
