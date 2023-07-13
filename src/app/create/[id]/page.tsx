'use client'

import React from 'react'
import { Metadata } from 'next'
import { useParams } from 'next/navigation'
import CreatePost from '@blog/components/post/create'

export const metadata: Metadata = {
    title: 'Create Post',
    description: 'Use this page to create a blog article.',
}

const RegisterPage = () => {
    const { id } = useParams()

    return (
        <>
            <CreatePost id={id ? Number(id) : null} />
        </>
    )
}

export default RegisterPage
