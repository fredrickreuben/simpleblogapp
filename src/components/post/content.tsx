'use client'

import React, { ChangeEvent } from 'react'
import ContentEditor from './editor'
import IPost from '@blog/domain/models/post'
import slugify from 'slugify'
import _ from 'lodash'
import { useSelector } from 'react-redux'
import { postsSelector } from '@blog/domain/slice/posts'

interface IProp {
    post: IPost | undefined
    onChange: (post: IPost | undefined) => void
}

const PostContent = ({ post, onChange }: IProp) => {
    const posts = useSelector(postsSelector)

    const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange({ ...post, title: event.target.value, slug: slugify(event.target.value, { replacement: '-', lower: true }) })
    }

    const onDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        onChange({ ...post, description: event.target.value })
    }

    const onContentChange = (event: ChangeEvent<HTMLInputElement>, editor: any) => {
        onChange({ ...post, content: editor.getData() })
    }

    return (
        <div>
            <div>
                <div className="my-4">
                    <div className="mb-4">
                        <input
                            className="shadow-none appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary border-gray-light"
                            name="title"
                            type="text"
                            value={post?.title ?? ''}
                            placeholder="Enter title"
                            onChange={onTitleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            placeholder="Enter Description"
                            value={post?.description}
                            onChange={onDescriptionChange}
                            className="shadow-none appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary border-gray-light"
                            rows={3}
                        />
                    </div>
                    <div className="mb-4">
                        <ContentEditor name="content" data={post?.content ?? ''} onChange={onContentChange} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostContent
