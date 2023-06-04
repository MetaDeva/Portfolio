import React from 'react'
import { NavLink } from "react-router-dom";

import banner from "../Images/sb--banner.jpeg"

export default function Banner() {


    return (
        <div className="banner--section" style={{ backgroundImage: `url(${banner})` }}>
            <div className="banner--title-box">
                <h1>Summer Out Loud</h1>

                <NavLink
                    to="/menu"
                    activeclassname="active">
                    <button>
                        Discover the Flavors
                    </button>
                </NavLink>

            </div>
        </div >
    )
}
