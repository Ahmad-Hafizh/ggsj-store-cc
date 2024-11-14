import { TypeBlogGgsjAsset } from "@/types/blog.type";
import { createSlice } from "@reduxjs/toolkit";
import { Document as RichTextDocument } from "@contentful/rich-text-types";

interface IBlog {
  fields: {
    title: string;
    slug: string;
    releaseDate: string;
    content?: RichTextDocument | undefined;
    cover?: TypeBlogGgsjAsset;
    preview: string;
  };
}
const initialBlog: IBlog = {
  fields: {
    title: "",
    slug: "",
    releaseDate: "",
    preview: "",
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
