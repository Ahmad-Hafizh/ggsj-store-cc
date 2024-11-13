import * as React from "react";
import { Metadata } from "next";

interface INewsLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "News & Article",
  description:
    "Gistara Geya Samasta Jaya is an indonesian trade company for agriculture and marine product ",
};

const NewsLayout: React.FunctionComponent<INewsLayoutProps> = ({
  children,
}) => {
  return <>{children}</>;
};

export default NewsLayout;
