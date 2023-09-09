import { configureStore } from "@reduxjs/toolkit"
import { Store } from "redux"

import { booksReducer } from "./booksReducer"
import thunk from "redux-thunk"

export type RootState = ReturnType<typeof booksReducer>

export const store: Store<RootState> = configureStore({
  //@ts-ignore
  reducer: booksReducer,
  middleware: [thunk],
  devTools: true,
})
