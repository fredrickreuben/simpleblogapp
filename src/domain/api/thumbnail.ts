import { createAsyncThunk } from "@reduxjs/toolkit";
import { IError } from "@blog/interfaces/error";
import { axios } from "@blog/config/global";
import IThumbnail from "../models/thumbnail";

const fetchThumbnails = createAsyncThunk<IThumbnail[], any, { rejectValue: IError }>('fetch/thumbnails', async () => {
    try {
        const response = await axios.get<IThumbnail[]>('thumbnails')
        return response.data
    } catch (error: any) {
        throw {
            status: error.status ?? 500,
            message: error.message ?? 'Un known error occured',
            isError: true
        }
    }
})

const createThumbnail = createAsyncThunk<IThumbnail, IThumbnail, { rejectValue: IError }>('create/thumbnail', async (req) => {
    try {
        const response = await axios.post<IThumbnail>('thumbnails', req)
        return response.data
    } catch (error: any) {
        throw {
            status: error.status ?? 500,
            message: error.message ?? 'Un known error occured',
            isError: true
        }
    }
})

const readThumbnail = createAsyncThunk<IThumbnail, string, { rejectValue: IError }>('get/thumbnail', async (slug) => {
    try {
        const response = await axios.get<IThumbnail>(`thumbnails?slug=${slug}`)
        return response.data
    } catch (error: any) {
        throw {
            status: error.status ?? 500,
            message: error.message ?? 'Un known error occured',
            isError: true
        }
    }
})

const updateThumbnail = createAsyncThunk<IThumbnail, IThumbnail, { rejectValue: IError }>('update/thumbnail', async (req) => {
    try {
        const response = await axios.put<IThumbnail>(`thumbnails/${req.id}`)
        return response.data
    } catch (error: any) {
        throw {
            status: error.status ?? 500,
            message: error.message ?? 'Un known error occured',
            isError: true
        }
    }
})

const deleteThumbnail = createAsyncThunk<boolean, number, { rejectValue: IError }>('delete/thumbnail', async (id) => {
    try {
        await axios.delete(`thumbnails/${id}`)
        return true
    } catch (error: any) {
        throw {
            status: error.status ?? 500,
            message: error.message ?? 'Un known error occured',
            isError: true
        }
    }
})

export { fetchThumbnails, createThumbnail, updateThumbnail, readThumbnail, deleteThumbnail }