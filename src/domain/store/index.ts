import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slice/user";
import tagsSlice from "../slice/tag";
import postsSlice from "../slice/posts";
import thumbnailSlice from "../slice/thumbnail";

const store = configureStore({
    reducer: {
        users: userSlice.reducer,
        tags: tagsSlice.reducer,
        posts: postsSlice.reducer,
        thumbnails: thumbnailSlice.reducer
    }
})

export type IRootState = ReturnType<typeof store.getState>

export default store