import * as React from "react";
import { Metadata } from "next";

interface IAboutLayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "About us",
  description:
    "Gistara Geya Samasta Jaya is an indonesian trade company for agriculture and marine product ",
};

const AboutLayout: React.FunctionComponent<IAboutLayoutProps> = ({
  children,
}) => {
  return <>{children}</>;
};

export default AboutLayout;
