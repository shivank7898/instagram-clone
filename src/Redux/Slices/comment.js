// commentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    data: [
      { postId: 1, comments: [] },
      { postId: 2, comments: [] },
      // Add more posts and comments as needed
    ],
  },
  reducers: {
    addComment: (state, action) => {
      const { postId, comment } = action.payload;
      const postIndex = state.data.findIndex((post) => post.postId === postId);

      if (postIndex !== -1) {
        state.data[postIndex].comments.push({
          id: state.data[postIndex].comments.length + 1,
          ...comment,
        });
      }
    },
  },
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
export const commentReducer = commentSlice.reducer