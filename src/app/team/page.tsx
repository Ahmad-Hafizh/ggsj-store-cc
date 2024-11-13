import TeamHero from "@/views/team/TeamHero";
import TeamList from "@/views/team/TeamList";
import React from "react";

const TeamPage = () => {
  return (
    <div className="container mx-auto px-[5%]">
      <TeamHero />
      <TeamList />
    </div>
  );
};

export default TeamPage;
