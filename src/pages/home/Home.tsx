import React from 'react'
import Typed from 'typed.js'

function Home() {
    var options = {
        strins: ["developer", "student", "designer", "writer"],
        typeSpeed: 40,
        backSpeed: 80,
        loop: true,
    }

    var typed = new Typed('.element', options)

    return (
        <div>
            <h2 id="typed"></h2>
        </div>
    );
}

export default Home;