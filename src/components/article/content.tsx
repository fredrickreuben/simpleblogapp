'use client'

import { viewPost } from '@blog/domain/api/posts'
import { postsSelector } from '@blog/domain/slice/posts'
import store from '@blog/domain/store'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ArticleView from './view'
import Loading from '../loading'
import IPost from '@blog/domain/models/post'
import { readUser } from '@blog/domain/api/users'
import { usersSelector } from '@blog/domain/slice/user'
import IUser from '@blog/domain/models/user'

interface IProp {
    slug: string
}

const ArticleContent = ({ slug }: IProp) => {
    const posts = useSelector(postsSelector)
    const users = useSelector(usersSelector)

    const [post, setPost] = useState<IPost>()
    const [user, setUser] = useState<IUser>()

    useEffect(() => {
        store.dispatch(viewPost(slug))
    }, [])

    useEffect(() => {
        if (posts.post) {
            setPost(state => ({ ...state, ...posts.post }))
            store.dispatch(readUser(posts.post.user_id))
        }
    }, [posts.post])

    useEffect(() => {
        if (users.user) {
            setUser(state => ({ ...state, ...users.user }))
        }
    }, [users.user])

    return (
        <div className="py-5 min-h-screen">
            {post ? (
                <ArticleView {...post} {...user} />
            ) : (
                <div className="relative h-96 w-full">
                    <Loading />
                </div>
            )}
        </div>
    )
}

export default ArticleContent
