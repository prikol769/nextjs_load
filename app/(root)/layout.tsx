import Navbar from "@/components/ui/Navbar"
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