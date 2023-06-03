import React from 'react'

import banner from "../Images/sb--banner.jpeg"

export default function Banner() {


    return (
        <div className="banner--section" style={{ backgroundImage: `url(${banner})` }}>
            <div className="banner--title-box">
                <h1>Summer Out Loud</h1>
                <button > Discover the Flavors </button>
            </div>
        </div>
    )
}
