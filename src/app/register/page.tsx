import React from 'react'
import { Metadata } from 'next'
import Register from '../../components/register'

export const metadata: Metadata = {
    title: {
        default: 'Register',
        template: '%s | Blog App',
    },
    description: 'Simple Blog App',
}

const RegisterPage = () => {
    return (
        <>
            <Register />
        </>
    )
}

export default RegisterPage
