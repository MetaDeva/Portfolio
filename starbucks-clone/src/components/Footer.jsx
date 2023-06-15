import React from 'react'
import { NavLink } from "react-router-dom";

import facebook from '../Images/facebook.png'
import twitter from '../Images/twitter.png'
import instagram from '../Images/instagram.png'
import youtube from '../Images/youtube.png'

import arrow from '../Images/footer--arrow.svg'

export default function Footer() {

    const [footerToggled, setFooterToggled] = React.useState(false)

    const [activeIndex, setActiveIndex] = React.useState(null)
    const footerContentRef = React.useRef([])

    // Toggling Footer Drop Down
    function footerToggledFunction() {
        setFooterToggled(toggle => !toggle)
    }

    function footerDropToggle(index) {
        setActiveIndex(prev => prev === index ? null : index)
    }

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    console.log(footerToggled);

    return (
        <footer>
            <div className='first-footer--container' >

                <div
                    className={`first footer--content ${activeIndex === 0 ? "drop" : ""}`}
                    onClick={() => footerDropToggle(0)}
                    ref={el => (footerContentRef.current[0] = el)}>

                    <h4 onClick={footerToggledFunction}>  About Us   <img className="arrow" src={arrow} alt='' /></h4>
                    <ul>
                        <NavLink
                            to="/company"
                            onClick={handleLinkClick}
                        >
                            <li>  Our Company  </li>
                        </NavLink>
                        <NavLink
                            to="/stories"
                            onClick={handleLinkClick}
                        >
                            <li>  Stories and News  </li>
                        </NavLink>
                        <NavLink
                            to="/service"
                            onClick={handleLinkClick}
                        >
                            <li>  Customer Service   </li>
                        </NavLink>

                        <NavLink
                            to="/careers"
                            onClick={handleLinkClick}
                        >
                            <li> Careers  </li>
                        </NavLink>
                    </ul>
                </div>

                <div
                    className={`second footer--content ${activeIndex === 1 ? "drop" : ""}`}
                    onClick={() => footerDropToggle(1)}
                    ref={el => (footerContentRef.current[1] = el)}>

                    <h4 onClick={footerToggledFunction}>  Order Online  <img className="arrow" src={arrow} alt='' /> </h4>
                    <ul >
                        <NavLink
                            to="/order"
                            onClick={handleLinkClick}
                        >
                            <li>  Order on the App   </li>
                        </NavLink>
                        <NavLink
                            to="/delivery"
                            onClick={handleLinkClick}
                        >
                            <li>  Delivery   </li>
                        </NavLink>

                        <NavLink
                            to="/gifts"
                            onClick={handleLinkClick}
                        >
                            <li>  Send eGifts   </li>
                        </NavLink>

                        <NavLink
                            to="/partnership"
                            onClick={handleLinkClick}
                        >
                            <li>  Grab Partnerships   </li>
                        </NavLink>

                    </ul>
                </div>

                <div
                    className={`third footer--content ${activeIndex === 2 ? "drop" : ""}`}
                    onClick={() => footerDropToggle(2)}
                    ref={el => (footerContentRef.current[2] = el)}>

                    <h4 onClick={footerToggledFunction}> Rewards  <img className="arrow" src={arrow} alt='' /></h4>
                    <ul>
                        <NavLink
                            to="/login"
                            onClick={handleLinkClick}
                        >
                            <li> My Account </li>
                        </NavLink>
                        <NavLink
                            to="/login"
                            onClick={handleLinkClick}
                        >
                            <li> View Transactions </li>
                        </NavLink>
                        <NavLink
                            to="/login"
                            onClick={handleLinkClick}
                        >
                            <li> Reload </li>
                        </NavLink>
                        <NavLink
                            to="/login"
                            onClick={handleLinkClick}
                        >
                            <li> FAQs </li>
                        </NavLink>
                    </ul>
                </div>

                <div className='fourth footer--content'>
                    <h4> Social Impact </h4>
                </div>

                <div className='fifth footer--content'>
                    <h4> Promotions </h4>
                </div>


            </div>

            <div className='second-footer--container'>

                <div className="social-icon--box">
                    <a href="https://www.facebook.com/StarbucksPhilippines"> <img src={facebook} alt='' /> </a>
                    <a href='http://www.twitter.com/starbucksph'> <img src={twitter} alt='' /> </a>
                    <a href="http://www.instagram.com/starbucksph"> <img src={instagram} alt='' /> </a>
                    <a href="https://www.youtube.com/channel/UColvYenSJ5Lc4cKrlb0Ajrw"> <img src={youtube} alt='' /></a>
                </div>

                <ul>
                    <li>  Web Accessibility </li>
                    <li>  Privacy Policy  </li>
                    <li>  Terms of Use  </li>
                    <li>  Site Map  </li>
                    <li>  Cookie Preferences  </li>

                    <span> © 2022 Starbucks Coffee Company. All rights reserved. </span>
                </ul>
            </div>
        </footer >
    )
}
