import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../Service/images/banner.jpg'

import './Service.css'

export default function Service() {
    const articleRef = React.useRef(null)

    const [navToggled, setNavToggled] = React.useState(false)

    // Scroll to Element (Button Banner)
    function scrollToElement() {
        articleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Toggling Nav Burger
    function navToggledFunction() {
        setNavToggled(toggle => !toggle)
    }
    return (
        <div>
            <Header
                toggleFunction={navToggledFunction}
                toggled={navToggled}
            />

            <div className='service--banner-section' style={{ backgroundImage: `url(${banner})` }}>
                <div className='service--banner-content'>
                    <h1> Customer Service </h1>
                    <h3> How can we help you? </h3>
                    <button onClick={scrollToElement}> Browse Our Contacts </button>
                </div>
            </div>

            <main>
                <div className='service--row'>
                    <div className='service--row-content' ref={articleRef}>
                        <p>
                            Share your thoughts! We welcome all questions, comments and feedback – it helps us make your
                            experience at Starbucks the best it can be. Please select the category below that best fits
                            your comment or question, then e-mail us. We’ll respond as quickly as possible.
                        </p>

                        <h2> Our products and stores </h2>
                        <p>
                            Please e-mail <span> customer@rustancoffee.ph </span> if you have something to ask or say about your experiences
                            with our beverages, merchandise or retail stores.
                        </p>

                        <h2> Our Company </h2>
                        <p>
                            If you would like to find out more about Starbucks as a company, including our corporate social responsibility efforts
                            or investor relations, please e-mail <br />
                            <span> marketing@rustancoffee.ph. </span>
                        </p>

                        <h2> Our Website </h2>
                        <p>
                            If you have a technical issue to report or question regarding this web site, then by all means e-mail
                            <span> marketing@rustancoffee.ph. </span>
                        </p>

                        <h2> Our Careers </h2>
                        <p>
                            If you would like to be part of the Starbucks Philippines team, click on <span> Careers. </span>
                        </p>

                        <h2> Starbucks Rewards Customer Care </h2>
                        <p>
                            If you would like to contact Starbucks by postal mail, phone or e-mail, please direct your questions and comments to:
                        </p>

                        <h2> Starbucks Customer Relations </h2>
                        <p>
                            Rustan Coffee Building, 14 Jupiter St. cor. Asteroid St., <br />
                            Bel-Air 1, Makati City, Philippines 1209 <br />
                            Tel: +632-8462-6262 (Metro Manila), 1-800-10-4626262 (domestic toll-fee via PLDT) <br />
                            Monday to Friday, 9AM - 9PM <br />
                            Saturday, 10AM - 8PM <br />
                            E-mail: card@starbucks.ph
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
