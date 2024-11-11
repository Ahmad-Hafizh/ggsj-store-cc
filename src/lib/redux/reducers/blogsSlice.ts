import { createSlice } from "@reduxjs/toolkit";

const blogsSlice = createSlice({
  name: "blogs",
  initialState: [{ title: "", slug: "" }],
  reducers: {
    addBlogsData: (initialState, action) => {
      return [...action.payload];
    },
  },
});
export const { addBlogsData } = blogsSlice.actions;
export default blogsSlice.reducer;
