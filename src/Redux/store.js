import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./Slices/post";
import { commentReducer} from "./Slices/comment";
const store = configureStore({
  reducer: {
    posts:postReducer,
    comment:commentReducer
      
  },
});

export default store;
