import { createSlice } from "@reduxjs/toolkit";

interface IProduct {
  fields: {
    title: string;
    slug: string;
    cover?: any;
    category?: any[];
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