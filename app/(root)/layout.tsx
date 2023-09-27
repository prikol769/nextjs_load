import Navbar from "@/components/Navbar"
import Footer from "@/components/ui/Footer"
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default layout