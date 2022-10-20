import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

function Home() {
    var options = {
        strins: ["developer", "student", "designer", "writer"],
        typeSpeed: 40,
        backSpeed: 80,
        loop: true,
    }

    const el = useRef(null)

    useEffect(() => {
        var typed = new Typed('.element', options)

        return () => {
            typed.destroy();
        }
    }, [])

    return (
        <div>
            <h2 ref={el}></h2>
        </div>
    )
}

export default Home;