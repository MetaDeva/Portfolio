import React from 'react'
import bannerMenu from '../images/menu--banner.jpeg'

export default function MenuBanner({ scrollToElement }) {
    return (
        <div className="menu-banner--section" style={{ backgroundImage: `url(${bannerMenu})` }}>
            <div className="banner--title-box">
                <h1>Bask in the fun</h1>
                <p>Welcome the bright, sunny days ahead with Starbucks new lineup of summer stunners</p>
                <button onClick={scrollToElement}> Discover the Flavors </button>
            </div>
        </div>
    )
}
