import React, { useState } from 'react'
import Header from "./Header"
const About = () => {
    const [cl, setCl] = useState("hover")
    return (
        <>
            <Header />
            <div>About</div>
        </>

    )
}

export default About