import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import blogsReducer from "./reducers/blogsSlice";

export const mainStore = () => {
  return configureStore({
    reducer: {
      productsReducer,
      blogsReducer,
    },
  });
};

// define type store fixed setup for typescript
export type AppStore = ReturnType<typeof mainStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
