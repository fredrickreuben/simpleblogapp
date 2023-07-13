'use client'

import ITag from '@blog/domain/models/tag'
import { nanoid } from '@reduxjs/toolkit'
import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'
import ImageUploading, { ImageListType } from 'react-images-uploading'
import slugify from 'slugify'
import _ from 'lodash'
import { FaSave } from 'react-icons/fa'
import store from '@blog/domain/store'
import { createTag } from '@blog/domain/api/tags'
import { tagsSelector } from '@blog/domain/slice/tag'
import { useSelector } from 'react-redux'
import IPost from '@blog/domain/models/post'
import Chip from '../chip'
import { createThumbnail } from '@blog/domain/api/thumbnail'
import { thumbnailSelector } from '@blog/domain/slice/thumbnail'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { postsSelector } from '@blog/domain/slice/posts'
import { LOADINGACTIONS, LOADINGSTATE } from '@blog/interfaces/loading'

interface IProp {
    post: IPost | undefined
	onCreatePost: () => void
	onEditPost: () => void,
    onChange: (post: IPost | undefined) => void
    onTag: (tag: ITag) => void
}

const PostSide = ({ post, onChange, onCreatePost, onEditPost }: IProp) => {
    const tags = useSelector(tagsSelector)
    const thumbnails = useSelector(thumbnailSelector)
    const posts = useSelector(postsSelector)
    const [tag, setTag] = useState<ITag>({ tag: '', slug: '' })

    const onChangeThumbnail = (list: ImageListType, addUpdateIndex: number[] | undefined) => {
        store.dispatch(createThumbnail({ id: nanoid(), url: list[0]['data_url'] }))
    }

    const onChangeTag = (event: ChangeEvent<HTMLInputElement>) => {
        setTag(state => ({
            id: nanoid(),
            tag: _.startCase(event.target.value),
            slug: slugify(event.target.value, { replacement: '_', lower: true }),
        }))
    }

    const onTagCreate = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === ' ') event.preventDefault()
        else if (event.key === 'Enter') {
            setTag({ tag: '', slug: '' })
            store.dispatch(createTag(tag))
        }
    }

    const onTagRemove = (slug: string) => {
        if (post.tags.some(t => t.slug == slug)) {
            onChange({ ...post, tags: post.tags.filter(t => t.slug != slug) })
        }
    }

    useEffect(() => {
        if (thumbnails.thumbnail) {
            onChange({ ...post, thumbnail: thumbnails.thumbnail })
        }
    }, [thumbnails.thumbnail])

    useEffect(() => {
        if (tags.tag) {
            if (!post || !post.tags) {
                onChange({ ...post, tags: [tags.tag] })
            } else if (!post.tags.some(item => item.slug === tags.tag.slug)) {
                onChange({ ...post, tags: [...post.tags, tags.tag] })
            }
        }
    }, [tags.tag])

    return (
        <div className="my-4">
            <div className="h-80 rounded-sm p-2 border-dashed border-2 border-gray-light">
                <ImageUploading value={[]} onChange={(value, index) => onChangeThumbnail(value, index)} maxNumber={1} dataURLKey="data_url">
                    {({ onImageUpload, dragProps }) => (
                        <div className="upload__image-wrapper bg-gray-light h-full rounded-sm" onClick={onImageUpload} {...dragProps}>
                            <div className="h-full">{post?.thumbnail ? <img src={post.thumbnail.url} alt="" className="h-full w-full rounded" /> : <div className=""></div>}</div>
                        </div>
                    )}
                </ImageUploading>
            </div>

            <div className="my-4">
                <label htmlFor="Tag" className="">
                    Tags
                </label>
                <div className="p-2 flex flex-wrap gap-2">{post?.tags?.map(item => <Chip key={item.id} tag={item} onRemove={onTagRemove} />)}</div>
                <input
                    type="text"
                    className="w-full mt-2 border-0 border-b-2 p-2 border-b-gray-light outline-none focus:border-b-primary"
                    id="Tag"
                    placeholder="Enter Tag"
                    name="tag"
                    value={tag?.tag}
                    onKeyDown={onTagCreate}
                    onChange={onChangeTag}
                />
            </div>
			<div className="flex justify-end">
				{!post?.id ?
					<button
						className="inline-flex items-center bg-primary border-0 py-2 px-5 focus:outline-none hover:opacity-80 rounded-md text-white text-base mt-4 md:mt-0 transition-all"
						onClick={onCreatePost}
					>
						<span className="px-1">Create Post</span>
						{posts.loading?.state == LOADINGSTATE.LOADING && posts.loading.action == LOADINGACTIONS.CREATE ? <AiOutlineLoading3Quarters className="animate-spin" /> : <FaSave />}
					</button>
					:
					<button
						className="inline-flex items-center bg-primary border-0 py-2 px-5 focus:outline-none hover:opacity-80 rounded-md text-white text-base mt-4 md:mt-0 transition-all"
						onClick={onEditPost}
					>
						<span className="px-1">Save Post</span>
						{posts.loading?.state == LOADINGSTATE.LOADING && posts.loading.action == LOADINGACTIONS.CREATE ? <AiOutlineLoading3Quarters className="animate-spin" /> : <FaSave />}
					</button>
				}
            </div>
        </div>
    )
}

export default PostSide
function multer(arg0: { dest: string }) {
    throw new Error('Function not implemented.')
}
