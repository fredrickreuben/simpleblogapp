'use client'

import IPost from '@blog/domain/models/post'
import React from 'react'
import parser from 'html-react-parser'
import { FaUserCircle } from 'react-icons/fa'
import IUser from '@blog/domain/models/user'

const ArticleView = ({ title, description, content, thumbnail, tags, firstName, lastName }: IPost & IUser) => {
    return (
        <div className="p-5 md:px-44 min-h-screen">
            <div className="shadow-md rounded p-4">
                <h1 className="text-4xl font-medium text-dark mb-4">{title}</h1>
                <div className="">
                    <img className="w-full h-full rounded" src={thumbnail?.url} alt={title} />
                </div>
                <div className="pt-5 flex gap-2 items-center">
                    <FaUserCircle className='text-5xl' />
                    <span className="text-lg font-bold">{`${firstName} ${lastName}`}</span>
                </div>
                <div className="text-gray-dark pb-5">{parser(content)}</div>
                <div className="py-5 flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span className="bg-gray-light text-sm text-dark rounded-full p-1 px-3">{tag.tag}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ArticleView
