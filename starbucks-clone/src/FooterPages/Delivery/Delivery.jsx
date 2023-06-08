import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../Delivery/images/banner.jpeg'
import grab from '../Delivery/images/grab.png'
import panda from '../Delivery/images/panda.png'
import roo from '../Delivery/images/pickaroo.jpeg'

import drop from '../Order/images/dropdown-btn.svg'

import './Delivery.css'

export default function Delivery() {

    const articleRef = React.useRef(null)

    const [active, setActive] = React.useState(null)

    const [navToggled, setNavToggled] = React.useState(false)

    // Toggling Nav Burger
    function navToggledFunction() {
        setNavToggled(toggle => !toggle)
    }

    // Toggle Dropdown
    function toggleContent(index) {
        setActive((prevActive) => (prevActive === index ? null : index))
    }

    // Scroll to Element (Button Banner)
    function scrollToElement() {
        articleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return (
        <div>
            <Header
                toggleFunction={navToggledFunction}
                toggled={navToggled}
            />
            <div className='delivery--banner-section' style={{ backgroundImage: `url(${banner})` }}>

                <div className='delivery--banner-content' >
                    <h1> Starbucks® Delivers </h1>
                    <h3> Your Starbucks® run just got easier. </h3>
                    <button onClick={scrollToElement}> Browse Delivery Options </button>
                </div>

            </div>
            <div className='delivery--content-container' ref={articleRef}>
                <div className='delivery--content'>

                    <div className='delivery--content-textbox'>
                        <h1> Starbucks® Coffee Delivered to Your Doorstep </h1>
                        <p>
                            Find out if delivery is available near you through our partners' app.
                            Start your day and order to get your Starbucks® favourites delivered to you via GrabFood and foodpanda.
                        </p>
                    </div>

                    <img src={grab} alt='' />
                    <img src={panda} alt='' />
                    <img src={roo} alt='' />
                </div>
            </div>

            <div className='delivery-dropdown-container'>
                <div className='delivery-dropdown-title'>
                    <span> Frequently Asked Questions </span>
                </div>


                <div className='delivery-dropdown-box' >

                    <div className='content'

                        onClick={() => toggleContent(0)}>
                        <div className='order-question-and-btn' >
                            <div className='question'> How do I order Starbucks® Delivers? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 0 ? 'dropped' : ''}`} >
                            To get started, simply order through the GrabFood or foodpanda or Pick.A.Roo app.
                        </div>
                    </div>

                    <div className='content'

                        onClick={() => toggleContent(1)}>
                        <div className='order-question-and-btn'>
                            <div className='question'> Can the full menu of items available at my local Starbucks store be delivered?  </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 1 ? 'dropped' : ''}`} >
                            To maintain the high standards of quality and consistency we know you expect from us, we’ve optimized our
                            menu for delivery. Consequently, select food and beverage items are currently unavailable for delivery.
                        </div>
                    </div>

                    <div className='content'

                        onClick={() => toggleContent(2)}
                    >
                        <div className='order-question-and-btn'>
                            <div className='question'> Can I pay for Starbucks Delivers with my Starbucks Card or Starbucks® app? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 2 ? 'dropped' : ''}`} >
                            Paying for delivery with a Starbucks Card or Starbucks® app isn’t supported at this time. We encourage you
                            to use your GrabFood or foodpanda or Pick.A.Roo for delivery.
                        </div>
                    </div>

                    <div className='content'

                        onClick={() => toggleContent(3)}
                    >
                        <div className='order-question-and-btn'>
                            <div className='question'> Will I earn Stars when I order through Starbucks® Delivers? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 3 ? 'dropped' : ''}`} >
                            Earning of Stars is now possible on GrabFood. A Starbucks Rewards member can collect 1 Star for every ₱40 spent
                            on Starbucks orders on GrabFood. Simply link the Starbucks Rewards account to a Grab app account.
                            To link accounts for the first time: 1. Go to the Food tile on the Grab app and search for Starbucks to order.
                            2. Once you’ve completed your order, go to the ‘Loyalty and Membership’ section on the Order Summary page.
                            Click ‘Add Account’ and type in your Starbucks Rewards log-in details. 3. Once you’ve received a notification
                            that you’ve successfully linked your accounts, you will start collecting Stars on all paid and completed GrabFood
                            deliveries. There’s no need to link accounts every time you order Starbucks on GrabFood after.
                        </div>
                    </div>

                    <div className='content'

                        onClick={() => toggleContent(4)}
                    >
                        <div className='order-question-and-btn'>
                            <div className='question'> Is Starbucks® Delivers available near me? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 4 ? 'dropped' : ''}`} >
                            To find out if delivery is available where you are, enter your location on the Grabfood or foodpanda or Pick.A.Roo app.                        </div>
                    </div>

                    <div className='content'

                        onClick={() => toggleContent(5)}
                    >
                        <div className='order-question-and-btn'>
                            <div className='question'> What do I do if I have an issue with my delivery? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 5 ? 'dropped' : ''}`} >
                            Please reach out to GrabFood or foodpanda or Pick.A.Roo customer service if you have issue with your delivery.                        </div>
                    </div>


                </div>

            </div>
            <Footer />
        </div>
    )
}
