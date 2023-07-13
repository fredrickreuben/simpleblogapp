'use client'

import React from 'react'
import Header from '@blog/partials/header'
import Footer from '@blog/partials/footer'

type Props = {
    children?: React.ReactNode
}

const MainTemplate = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main className="container">{children}</main>
            <Footer />
        </>
    )
}

export default MainTemplate
