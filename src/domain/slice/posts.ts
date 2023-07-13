import { SliceCaseReducers, createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store";
import { LOADINGSTATE, LOADINGACTIONS } from "@blog/interfaces/loading";
import { createPost, deletePost, fetchPosts, readPost, updatePost, viewPost } from "../api/posts";
import { IPostState } from "@blog/interfaces/states";

const postsSlice = createSlice<IPostState, SliceCaseReducers<IPostState>>({
    name: 'posts',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.loading = { state: LOADINGSTATE.LOADING, action: LOADINGACTIONS.ALL }
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.ALL }
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.ALL }
                state.error = action.payload
            })
            .addCase(createPost.pending, (state, action) => {
                state.loading = { state: LOADINGSTATE.LOADING, action: LOADINGACTIONS.CREATE }
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.CREATE }
                state.post = action.payload
            })
            .addCase(createPost.rejected, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.CREATE }
                state.error = action.payload
            })
            .addCase(readPost.pending, (state, action) => {
                state.loading = { state: LOADINGSTATE.LOADING, action: LOADINGACTIONS.READ }
            })
            .addCase(readPost.fulfilled, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.READ }
                state.post = action.payload
            })
            .addCase(readPost.rejected, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.READ }
                state.error = action.payload
            })
            .addCase(viewPost.pending, (state, action) => {
                state.loading = { state: LOADINGSTATE.LOADING, action: LOADINGACTIONS.READ }
            })
            .addCase(viewPost.fulfilled, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.READ }
                state.post = action.payload
            })
            .addCase(viewPost.rejected, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.READ }
                state.error = action.payload
            })
            .addCase(updatePost.pending, (state, action) => {
                state.loading = { state: LOADINGSTATE.LOADING, action: LOADINGACTIONS.CREATE }
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.CREATE }
                state.post = action.payload
            })
            .addCase(updatePost.rejected, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.CREATE }
                state.error = action.payload
            })
            .addCase(deletePost.pending, (state, action) => {
                state.loading = { state: LOADINGSTATE.LOADING, action: LOADINGACTIONS.DELETE }
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.DELETE }
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.DELETE }
                state.error = action.payload
            })
    },
})


export const postsSelector = (state: IRootState) => state.posts

export default postsSlice