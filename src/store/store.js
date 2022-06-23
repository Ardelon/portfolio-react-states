import { configureStore } from "@reduxjs/toolkit";
import listContainerReduce from "../components/reduxComponents/listContainerSlice";
export default configureStore({
    reducer : {listContainer : listContainerReduce}
})