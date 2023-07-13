import { createAsyncThunk } from "@reduxjs/toolkit";
import IPost from "../models/post";
import { IError } from "@blog/interfaces/error";
import { axios } from "@blog/config/global";

const fetchPosts = createAsyncThunk<IPost[], any, { rejectValue: IError }>('fetch/posts', async () => {
    try {
        const response = await axios.get<IPost[]>('posts')
        return response.data
    } catch (error: any) {
        throw {
            status: error.status ?? 500,
            message: error.message ?? 'Un known error occured',
            isError: true
        }
    }
})

const createPost = createAsyncThunk<IPost, IPost, { rejectValue: IError }>('create/post', async (req) => {
    try {
        const response = await axios.post<IPost>('posts', req)
        return response.data
    } catch (error: any) {
        throw {
            status: error.status ?? 500,
            message: error.message ?? 'Un known error occured',
            isError: true
        }
    }
})

const readPost = createAsyncThunk<IPost, number, { rejectValue: IError }>('read/post', async (id) => {
    try {
        const response = await axios.get<IPost>(`posts/${id}`)
        return response.data
    } catch (error: any) {
        throw {
            status: error.status ?? 500,
            message: error.message ?? 'Un known error occured',
            isError: true
        }
    }
})

const viewPost = createAsyncThunk<IPost, string, { rejectValue: IError }>('view/post', async (slug) => {
    try {
        const response = await axios.get<IPost[]>(`posts?slug=${slug}`)
        return response.data[0]
    } catch (error: any) {
        throw {
            status: error.status ?? 500,
            message: error.message ?? 'Un known error occured',
            isError: true
        }
    }
})

const updatePost = createAsyncThunk<IPost, IPost, { rejectValue: IError }>('update/post', async (req) => {
    try {
        const response = await axios.put<IPost>(`posts/${req.id}`, req)
        return response.data
    } catch (error: any) {
        throw {
            status: error.status ?? 500,
            message: error.message ?? 'Un known error occured',
            isError: true
        }
    }
})

const deletePost = createAsyncThunk<boolean, number, { rejectValue: IError }>('delete/post', async (id) => {
    try {
        await axios.delete(`posts/${id}`)
        return true
    } catch (error: any) {
        throw {
            status: error.status ?? 500,
            message: error.message ?? 'Un known error occured',
            isError: true
        }
    }
})

export { fetchPosts, createPost, updatePost, viewPost, readPost, deletePost }