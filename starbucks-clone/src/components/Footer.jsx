import React from 'react'

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


    return (
        <footer>
            <div className='first-footer--container' >

                <div
                    className={`first footer--content ${activeIndex === 0 ? "drop" : ""}`}
                    onClick={() => footerDropToggle(0)}
                    ref={el => (footerContentRef.current[0] = el)}>

                    <h4 onClick={footerToggledFunction}>  About Us   <img className="arrow" src={arrow} alt='' /></h4>
                    <ul>
                        <li>  Our Company  </li>
                        <li>  Stories and News  </li>
                        <li>  Customer Service   </li>
                        <li> Careers  </li>
                    </ul>
                </div>

                <div
                    className={`second footer--content ${activeIndex === 1 ? "drop" : ""}`}
                    onClick={() => footerDropToggle(1)}
                    ref={el => (footerContentRef.current[1] = el)}>

                    <h4 onClick={footerToggledFunction}>  Order Online  <img className="arrow" src={arrow} alt='' /> </h4>
                    <ul >
                        <li>  Order on the App   </li>
                        <li>  Delivery   </li>
                        <li>  Send eGifts   </li>
                        <li>  Grab Partnerships   </li>
                    </ul>
                </div>

                <div
                    className={`third footer--content ${activeIndex === 2 ? "drop" : ""}`}
                    onClick={() => footerDropToggle(2)}
                    ref={el => (footerContentRef.current[2] = el)}>

                    <h4 onClick={footerToggledFunction}> Rewards  <img className="arrow" src={arrow} alt='' /></h4>
                    <ul>
                        <li> My Account </li>
                        <li> View Transactions </li>
                        <li> Reload </li>
                        <li> FAQs </li>
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

                    <img src={facebook} alt='' />
                    <img src={twitter} alt='' />
                    <img src={instagram} alt='' />
                    <img src={youtube} alt='' />

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
