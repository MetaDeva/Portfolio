import React from 'react'
import bannerMenu from '../images/merchandise--banner.jpeg'

export default function MerchandiseBanner({ scrollToElement }) {
    return (
        <div className="menu-banner--section" style={{ backgroundImage: `url(${bannerMenu})` }}>
            <div className="banner--title-box">
                <h1>Happy Giraffe</h1>
                <p>Find the perfect cup for the perfect beverage</p>
                <button onClick={scrollToElement}> Explore </button>
            </div>
        </div>
    )
}
