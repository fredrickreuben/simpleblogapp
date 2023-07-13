'use client'

import { postsSelector } from '@blog/domain/slice/posts'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ArticleExcerpt from './excerpt'
import Loading from '../loading'
import store from '@blog/domain/store'
import { fetchPosts } from '@blog/domain/api/posts'

const ArticleList = () => {
    const posts = useSelector(postsSelector)

    useEffect(() => {
        store.dispatch(fetchPosts(''))
    }, [])

    return (
        <div className="flex flex-wrap m-4">
            {posts.posts ? (
                posts.posts.map(post => <ArticleExcerpt post={post} />)
            ) : (
                <div className="relative h-96 w-full">
                    <Loading />
                </div>
            )}
        </div>
    )
}

export default ArticleList
