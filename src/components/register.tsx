'use client'

import { createUser } from '@blog/domain/api/users'
import IUser from '@blog/domain/models/user'
import { usersSelector } from '@blog/domain/slice/user'
import store from '@blog/domain/store'
import { LOADINGACTIONS, LOADINGSTATE } from '@blog/interfaces/loading'
import { signIn } from 'next-auth/react'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { FcBiohazard } from 'react-icons/fc'
import { useSelector } from 'react-redux'

const Register = () => {
    const [user, setUser] = useState<IUser>({ firstName: '', lastName: '', email: '', password: '' })

    const users = useSelector(usersSelector)

    const onUserChnage = (event: ChangeEvent<HTMLInputElement>) => {
        setUser(state => ({
            ...state,
            [event.target.name]: [event.target.value],
        }))
    }

    const onUserCreate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        store.dispatch(createUser(user))
    }

    return (
        <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
            <div className="container h-full p-10">
                <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800 w-2/4">
                        <div className="px-4">
                            <div className="flex justify-center">
                                <FcBiohazard className="text-9xl" />
                            </div>

                            <form className="text-center" onSubmit={onUserCreate}>
                                <p className="mb-4">Please Register To Your Account</p>
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="relative mb-4 col-span-12 md:col-span-6" data-te-input-wrapper-init>
                                        <input type="text" className="peer form-control" id="FirstName" placeholder="First Name" name="firstName" onChange={onUserChnage} />
                                        <label htmlFor="FirstName" className="form-label">
                                            First Name
                                        </label>
                                    </div>
                                    <div className="relative mb-4 col-span-12 md:col-span-6" data-te-input-wrapper-init>
                                        <input type="text" className="peer form-control" id="LastName" placeholder="Last Name" name="lastName" onChange={onUserChnage} />
                                        <label htmlFor="LastName" className="form-label">
                                            Last Name
                                        </label>
                                    </div>
                                </div>
                                <div className="relative mb-4" data-te-input-wrapper-init>
                                    <input type="email" className="peer form-control" id="Email" placeholder="Email" name="email" onChange={onUserChnage} />
                                    <label htmlFor="Email" className="form-label">
                                        Email
                                    </label>
                                </div>
                                <div className="relative mb-4" data-te-input-wrapper-init>
                                    <input type="password" className="peer form-control" id="Password" placeholder="Password" name="password" onChange={onUserChnage} />
                                    <label htmlFor="Password" className="form-label">
                                        Password
                                    </label>
                                </div>

                                <div className="mb-12 pb-1 pt-1 text-center">
                                    <button className="btn bg-primary" type="submit" data-te-ripple-init data-te-ripple-color="light">
                                        {users.loading?.state == LOADINGSTATE.LOADING && users.loading.action == LOADINGACTIONS.CREATE ? (
                                            <AiOutlineLoading3Quarters className="animate-spin text-white" />
                                        ) : (
                                            'Register'
                                        )}
                                    </button>
                                </div>

                                <div className="flex items-center justify-between pb-6">
                                    <p className="mb-0 mr-2">I Already have an account!</p>
                                    <button
                                        type="button"
                                        className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        onClick={() => signIn()}
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register
