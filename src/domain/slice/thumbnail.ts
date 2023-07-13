import { SliceCaseReducers, createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store";
import { LOADINGSTATE, LOADINGACTIONS } from "@blog/interfaces/loading";
import { createThumbnail, deleteThumbnail, fetchThumbnails, readThumbnail, updateThumbnail } from "../api/thumbnail";
import { IThumbnailState } from "@blog/interfaces/states";

const thumbnailSlice = createSlice<IThumbnailState, SliceCaseReducers<IThumbnailState>>({
    name: 'thumbnail',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchThumbnails.pending, (state, action) => {
                state.loading = { state: LOADINGSTATE.LOADING, action: LOADINGACTIONS.ALL }
            })
            .addCase(fetchThumbnails.fulfilled, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.ALL }
                state.thumbnails = action.payload
            })
            .addCase(fetchThumbnails.rejected, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.ALL }
                state.error = action.payload
            })
            .addCase(createThumbnail.pending, (state, action) => {
                state.loading = { state: LOADINGSTATE.LOADING, action: LOADINGACTIONS.CREATE }
            })
            .addCase(createThumbnail.fulfilled, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.CREATE }
                state.thumbnail = action.payload
            })
            .addCase(createThumbnail.rejected, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.CREATE }
                state.error = action.payload
            })
            .addCase(readThumbnail.pending, (state, action) => {
                state.loading = { state: LOADINGSTATE.LOADING, action: LOADINGACTIONS.READ }
            })
            .addCase(readThumbnail.fulfilled, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.READ }
                state.thumbnail = action.payload
            })
            .addCase(readThumbnail.rejected, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.READ }
                state.error = action.payload
            })
            .addCase(updateThumbnail.pending, (state, action) => {
                state.loading = { state: LOADINGSTATE.LOADING, action: LOADINGACTIONS.CREATE }
            })
            .addCase(updateThumbnail.fulfilled, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.CREATE }
                state.thumbnail = action.payload
            })
            .addCase(updateThumbnail.rejected, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.CREATE }
                state.error = action.payload
            })
            .addCase(deleteThumbnail.pending, (state, action) => {
                state.loading = { state: LOADINGSTATE.LOADING, action: LOADINGACTIONS.DELETE }
            })
            .addCase(deleteThumbnail.fulfilled, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.DELETE }
            })
            .addCase(deleteThumbnail.rejected, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.DELETE }
                state.error = action.payload
            })
    },
})


export const thumbnailSelector = (state: IRootState) => state.thumbnails

export default thumbnailSlice