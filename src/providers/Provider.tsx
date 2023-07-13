'use client'

import store from '@blog/domain/store'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { Provider } from 'react-redux'

const MainProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <SessionProvider>{children}</SessionProvider>
        </Provider>
    )
}

export default MainProvider
