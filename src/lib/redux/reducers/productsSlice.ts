import { createSlice } from "@reduxjs/toolkit";

interface IProduct {
  fields: {
    title: string;
    slug: string;
    cover?: {
      sys: { id: string };
      fields: {
        file: {
          url: string;
          details?: {
            size: number;
            image: {
              width: number;
              height: number;
            };
          };
          fileName?: string;
          contentType?: string;
        };
      };
    };
    category?: string[];
  };
}

const initialProduct: IProduct = {
  fields: {
    title: "",
    slug: "",
  },
};
const productSlice = createSlice({
  name: "products",
  initialState: [initialProduct],
  reducers: {
    addProductData: (initialState, action) => {
      return [...action.payload];
    },
  },
});

export const { addProductData } = productSlice.actions;
export default productSlice.reducer;
