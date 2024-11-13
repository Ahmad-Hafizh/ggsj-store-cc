import * as React from "react";
import { Metadata } from "next";

interface ITeamLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Gistara Geya Samasta Jaya is an indonesian trade company for agriculture and marine product ",
};

const TeamLayout: React.FunctionComponent<ITeamLayoutProps> = ({
  children,
}) => {
  return <>{children}</>;
};

export default TeamLayout;
