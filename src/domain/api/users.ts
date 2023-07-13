import { axios } from "@blog/config/global";
import { createAsyncThunk } from "@reduxjs/toolkit";
import IUser from "../models/user";
import { IError } from "@blog/interfaces/error";

const createUser = createAsyncThunk<IUser, IUser, { rejectValue: IError }>('create/user', async (req) => {
    try {
        const response = await axios.post<IUser>('users', req)
        return response.data
    } catch (error: any) {
        throw {
            status: error.status ?? 500,
            message: error.message ?? 'Un known error occured',
            isError: true
        }
    }
})

const readUser = createAsyncThunk<IUser, number, { rejectValue: IError }>('read/user', async (id) => {
    try {
        const response = await axios.get<IUser>(`users/${id}`)
        return response.data
    } catch (error: any) {
        throw {
            status: error.status ?? 500,
            message: error.message ?? 'Un known error occured',
            isError: true
        }
    }
})

const updateUser = createAsyncThunk<IUser, IUser, { rejectValue: IError }>('update/user', async (req) => {
    try {
        const response = await axios.put<IUser>('users', req)
        return response.data
    } catch (error: any) {
        throw {
            status: error.status ?? 500,
            message: error.message ?? 'Un known error occured',
            isError: true
        }
    }
})

export { createUser, readUser, updateUser }