import { ITagState } from "@blog/interfaces/states";
import { SliceCaseReducers, createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store";
import { LOADINGSTATE, LOADINGACTIONS } from "@blog/interfaces/loading";
import { createTag, deleteTag, fetchTags, readTag, updateTag } from "../api/tags";

const tagsSlice = createSlice<ITagState, SliceCaseReducers<ITagState>>({
    name: 'tags',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTags.pending, (state, action) => {
                state.loading = { state: LOADINGSTATE.LOADING, action: LOADINGACTIONS.ALL }
            })
            .addCase(fetchTags.fulfilled, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.ALL }
                state.tags = action.payload
            })
            .addCase(fetchTags.rejected, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.ALL }
                state.error = action.payload
            })
            .addCase(createTag.pending, (state, action) => {
                state.loading = { state: LOADINGSTATE.LOADING, action: LOADINGACTIONS.CREATE }
            })
            .addCase(createTag.fulfilled, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.CREATE }
                state.tag = action.payload
            })
            .addCase(createTag.rejected, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.CREATE }
                state.error = action.payload
            })
            .addCase(readTag.pending, (state, action) => {
                state.loading = { state: LOADINGSTATE.LOADING, action: LOADINGACTIONS.READ }
            })
            .addCase(readTag.fulfilled, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.READ }
                state.tag = action.payload
            })
            .addCase(readTag.rejected, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.READ }
                state.error = action.payload
            })
            .addCase(updateTag.pending, (state, action) => {
                state.loading = { state: LOADINGSTATE.LOADING, action: LOADINGACTIONS.CREATE }
            })
            .addCase(updateTag.fulfilled, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.CREATE }
                state.tag = action.payload
            })
            .addCase(updateTag.rejected, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.CREATE }
                state.error = action.payload
            })
            .addCase(deleteTag.pending, (state, action) => {
                state.loading = { state: LOADINGSTATE.LOADING, action: LOADINGACTIONS.DELETE }
            })
            .addCase(deleteTag.fulfilled, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.DELETE }
            })
            .addCase(deleteTag.rejected, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.DELETE }
                state.error = action.payload
            })
    },
})


export const tagsSelector = (state: IRootState) => state.tags

export default tagsSlice