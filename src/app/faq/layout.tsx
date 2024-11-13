import * as React from "react";
import { Metadata } from "next";

interface IFAQLayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Gistara Geya Samasta Jaya is an indonesian trade company for agriculture and marine product ",
};

const FAQLayout: React.FunctionComponent<IFAQLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default FAQLayout;
