
import IPost from '@blog/domain/models/post'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { FiEdit } from 'react-icons/fi'

interface IProp {
    post: IPost
}

const ArticleExcerpt = ({ post }: IProp) => {

    const { data } = useSession()

    const createExcerpt = (article: string = '', length: number = 15) => {
        if (article.length > length) {
            const words = article.split(' ')
            let excerpt = words.slice(0, length).join(' ')

            if (words.length > length) {
                excerpt += '...'
            }
            return excerpt
        }

        return article
    }

    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={post?.thumbnail?.url} alt={post.slug} />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                    <Link href={`/${post.slug}`} className="title-font text-xl font-semibold text-dark mb-3 block">{post.title}</Link>
                    <span className="leading-relaxed mb-3">{createExcerpt(post.description)}</span>
                    <div className="flex items-center flex-wrap ">
                        <a href={`/${post.slug}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More
                            <svg className="w-4 h-4 ml-2 text-primary" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            1.2K
                        </span>
                        <span className={`text-gray-400 inline-flex items-center leading-none text-sm ${data && (Number(data.user.id) === Number(post.user_id)) && 'pr-3 py-1 border-r-2 border-gray-200'}`}>
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            6
                        </span>
                        {data && (Number(data.user.id) === Number(post.user_id)) && (
                            <Link href={`create/${post.id}`} className="text-gray-400 inline-flex items-center leading-none text-sm px-2">
                                <FiEdit />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleExcerpt