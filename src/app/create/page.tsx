import React from 'react'
import { Metadata } from 'next'
import CreatePost from '@blog/components/post/create'

export const metadata: Metadata = {
    title: 'Create Post',
    description: 'Use this page to create a blog article.'    
}

const RegisterPage = () => {
    return (
        <>
            <CreatePost />
        </>
    )
}

export default RegisterPage
