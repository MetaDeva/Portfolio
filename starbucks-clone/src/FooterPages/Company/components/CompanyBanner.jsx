import React from 'react'

import banner from '../images/banner.jpg'

export default function ({ scrollToElement }) {
    return (
        <div className='company-banner--section' style={{ backgroundImage: `url(${banner})` }}>
            <div className='company-banner-content'>
                <h3> Our mission is to inspire and nurture the human spirit - one person, one cup, and one neighborhood at a time. </h3>
                <button onClick={scrollToElement}> See our history </button>
            </div>
        </div>
    )
}
