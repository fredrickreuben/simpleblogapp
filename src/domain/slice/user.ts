import { SliceCaseReducers, createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store"
import { IUserState } from "@blog/interfaces/states";
import { createUser, readUser, updateUser } from "../api/users";
import { LOADINGSTATE, LOADINGACTIONS } from "@blog/interfaces/loading";

const userSlice = createSlice<IUserState, SliceCaseReducers<IUserState>>({
    name: 'users',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state, action) => {
                state.loading = { state: LOADINGSTATE.LOADING, action: LOADINGACTIONS.CREATE }
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.CREATE }
                state.user = action.payload
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.CREATE }
                state.error = action.payload
            })
            .addCase(readUser.pending, (state, action) => {
                state.loading = { state: LOADINGSTATE.LOADING, action: LOADINGACTIONS.READ }
            })
            .addCase(readUser.fulfilled, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.READ }
                state.user = action.payload
            })
            .addCase(readUser.rejected, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.READ }
                state.error = action.payload
            })
            .addCase(updateUser.pending, (state, action) => {
                state.loading = { state: LOADINGSTATE.LOADING, action: LOADINGACTIONS.CREATE }
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.CREATE }
                state.user = action.payload
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = { state: LOADINGSTATE.NONE, action: LOADINGACTIONS.CREATE }
                state.error = action.payload
            })
    }
})

export const usersSelector = (state: IRootState) => state.users

export default userSlice