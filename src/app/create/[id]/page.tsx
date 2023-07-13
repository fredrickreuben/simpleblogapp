import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import CreatePost from '@blog/components/post/create'

interface IProps {
    params: { id: number }
    searchParams: { [key: string]: string | string[] | undefined }
}

export const metadata: Metadata = {
    title: 'Create Post',
    description: 'Use this page to create a blog article.',
}

const RegisterPage = ({ params, searchParams }: IProps, parent: ResolvingMetadata) => {
    
    const id = params.id

    return <CreatePost id={id ? Number(id) : null} />
}

export default RegisterPage
