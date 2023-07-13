'use client'

import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FcBiohazard } from 'react-icons/fc'
import { MdAdd } from 'react-icons/md'

import React from 'react'

const Header = () => {
    const { status } = useSession()

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    <Link href="/" className="mr-5 hover:text-gray-900">
                        Home
                    </Link>
                </nav>
                <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                    <FcBiohazard />
                    <span className="ml-3 text-xl">Simple Blog</span>
                </a>
                {status == 'authenticated' ? (
                    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                        <Link href="/create" className="inline-flex items-center bg-primary border-0 py-2 px-5 focus:outline-none hover:opacity-80 rounded-md text-white text-base mt-4 md:mt-0 transition-all">
                            Create Post
                            <MdAdd />
                        </Link>
                        <button
                            className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-white rounded-md text-base mt-4 md:mt-0 text-dark hover:text-opacity-80 transition-all"
                            onClick={() => signOut()}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                        <button
                            className="inline-flex items-center bg-dark border-0 py-1 px-3 focus:outline-none bg-transparent rounded-md text-base mt-4 md:mt-0 text-dark hover:text-opacity-90 transition-all"
                            onClick={() => signIn()}
                        >
                            <span className="px-1">Login</span>
                        </button>
                        <Link
                            href="/register"
                            className="inline-flex items-center bg-primary text-white border-0 py-2 px-5 rounded-full focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0 hover:opacity-90 transition-all"
                        >
                            <span className="px-1">Register</span>
                        </Link>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
