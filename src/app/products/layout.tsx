import * as React from "react";
import { Metadata } from "next";

interface IProductsLayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "All Products",
  description:
    "Gistara Geya Samasta Jaya is an indonesian trade company for agriculture and marine product ",
};

const ProductsLayout: React.FunctionComponent<IProductsLayoutProps> = ({
  children,
}) => {
  return <>{children}</>;
};

export default ProductsLayout;
