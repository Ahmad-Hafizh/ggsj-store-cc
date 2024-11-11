"use client";
import { AppStore, mainStore } from "@/lib/redux/store";
import { Provider } from "react-redux";
import React from "react";

interface IStoreProviderprops {
  children: React.ReactNode;
}

const StoreProvider: React.FC<IStoreProviderprops> = ({ children }) => {
  const storeRef = React.useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = mainStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
