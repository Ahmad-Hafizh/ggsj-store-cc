import { TypeBlogGgsjAsset } from "@/types/blog.type";
import { createSlice } from "@reduxjs/toolkit";

interface IBlog {
  fields: {
    title: string;
    slug: string;
    releaseDate: string;
    content?: {
      content: string[];
    };
    cover?: TypeBlogGgsjAsset;
  };
}
const initialBlog: IBlog = {
  fields: {
    title: "",
    slug: "",
    releaseDate: "",
  },
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState: [initialBlog],
  reducers: {
    addBlogsData: (initialState, action) => {
      return [...action.payload];
    },
  },
});
export const { addBlogsData } = blogsSlice.actions;
export default blogsSlice.reducer;
