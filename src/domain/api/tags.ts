import { createAsyncThunk } from "@reduxjs/toolkit";
import { IError } from "@blog/interfaces/error";
import { axios } from "@blog/config/global";
import ITag from "../models/tag";

const fetchTags = createAsyncThunk<ITag[], any, { rejectValue: IError }>('fetch/tags', async () => {
    try {
        const response = await axios.get<ITag[]>('tags')
        return response.data
    } catch (error: any) {
        throw {
            status: error.status ?? 500,
            message: error.message ?? 'Un known error occured',
            isError: true
        }
    }
})

const createTag = createAsyncThunk<ITag, ITag, { rejectValue: IError }>('create/tag', async (req) => {
    try {
        const tag = await axios.get<ITag[]>(`tags?slug=${req.slug}`)
        if (tag.data.length > 0) return tag.data[0]
        else {
            const response = await axios.post<ITag>('tags', req)
            return response.data
        }
    } catch (error: any) {
        throw {
            status: error.status ?? 500,
            message: error.message ?? 'Un known error occured',
            isError: true
        }
    }
})

const readTag = createAsyncThunk<ITag, string, { rejectValue: IError }>('get/tag', async (slug) => {
    try {
        const response = await axios.get<ITag>(`tags?slug=${slug}`)
        return response.data
    } catch (error: any) {
        throw {
            status: error.status ?? 500,
            message: error.message ?? 'Un known error occured',
            isError: true
        }
    }
})

const updateTag = createAsyncThunk<ITag, ITag, { rejectValue: IError }>('update/tag', async (req) => {
    try {
        const response = await axios.put<ITag>(`tags/${req.id}`)
        return response.data
    } catch (error: any) {
        throw {
            status: error.status ?? 500,
            message: error.message ?? 'Un known error occured',
            isError: true
        }
    }
})

const deleteTag = createAsyncThunk<boolean, number, { rejectValue: IError }>('delete/tag', async (id) => {
    try {
        await axios.delete(`tags/${id}`)
        return true
    } catch (error: any) {
        throw {
            status: error.status ?? 500,
            message: error.message ?? 'Un known error occured',
            isError: true
        }
    }
})

export { fetchTags, createTag, updateTag, readTag, deleteTag }