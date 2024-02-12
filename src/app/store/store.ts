// store.ts
import { configureStore, Middleware } from "@reduxjs/toolkit";
import { useDispatch as useReduxDispatch } from "react-redux";
import rootReducer from "./root.reducer";

export type AppDispatch = typeof store.dispatch;
export const useDispatch = (): AppDispatch => useReduxDispatch<AppDispatch>();

const store = configureStore({
  reducer: rootReducer,
  // Add middleware as needed
});

export default store;
