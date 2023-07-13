'use client'

import { useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import PostContent from './content'
import PostSide from './side'
import { postsSelector } from '@blog/domain/slice/posts'
import ITag from '@blog/domain/models/tag'
import IPost from '@blog/domain/models/post'
import store from '@blog/domain/store'
import { createPost, readPost, updatePost } from '@blog/domain/api/posts'
import { useSession } from 'next-auth/react'

interface IProp {
    id?: number
}

const CreatePost = ({ id }: IProp) => {
    const { data: session } = useSession()

    const posts = useSelector(postsSelector)

    const [post, setPost] = useState<IPost>()

    const onTagChange = (value: ITag) => {}

    const onChange = (post: IPost) => {
        setPost(state => ({
            ...state,
            ...post,
            user_id: session.user.id,
        }))
    }

    const onCreatePost = () => {
        store.dispatch(createPost(post))
    }

    const onEditPost = () => {
        store.dispatch(updatePost(post))
    }

    useEffect(() => {
        if (id) store.dispatch(readPost(id))
    }, [id])

    useEffect(() => {
        if (posts?.post?.id && !id) {
            redirect(`create/${posts.post?.id}`)
        }
    }, [posts.post?.id, id])

    useEffect(() => {
        if (posts.post && posts.post.id) {
            setPost(state => ({
                ...state,
                ...posts.post,
            }))
        }
    }, [posts.post])

    return (
        <div className="flex flex-col lg:flex-row gap-4 my-6">
            <div className="w-full lg:w-4/6">
                <PostContent post={post} onChange={onChange} />
            </div>
            <div className="w-full lg:w-2/6">
                <PostSide post={post} onTag={onTagChange} onChange={onChange} onCreatePost={onCreatePost} onEditPost={onEditPost} />
            </div>
        </div>
    )
}

export default CreatePost
