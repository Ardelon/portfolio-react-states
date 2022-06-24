import { configureStore } from "@reduxjs/toolkit";
import listContainerReducer from "../components/reduxComponents/listContainerSlice";
export const store =  configureStore({
    reducer : {listContainer : listContainerReducer}
})