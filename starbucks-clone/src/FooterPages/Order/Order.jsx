import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../Order/images/banner.jpg'

import apple from '../Order/images/applestore.svg'
import playstore from '../Order/images/playstore.svg'

import first from '../Order/images/column-first.png'
import second from '../Order/images/column-second.png'
import fourth from '../Order/images/column-fourth.jpeg'

import drop from '../Order/images/dropdown-btn.svg'

import './Order.css'

export default function Order() {
    const [active, setActive] = React.useState(null)

    const [navToggled, setNavToggled] = React.useState(false)


    // Toggling Nav Burger
    function navToggledFunction() {
        setNavToggled(toggle => !toggle)
    }


    function toggleContent(index) {
        setActive((prevActive) => (prevActive === index ? null : index))
    }
    return (
        <div>
            <Header
                toggleFunction={navToggledFunction}
                toggled={navToggled}
            />
            <div className='order--banner-section' style={{ backgroundImage: `url(${banner})` }}>

                <div className='order--banner-content'>
                    <h1> Mobile Order & Pay </h1>
                    <h3> No time? Download the Starbucks PH app and order ahead. </h3>
                    <div className='image-row-box'>
                        <a href='https://apps.apple.com/ph/app/starbucks-philippines/id1363216428' target="_blank" rel="noreferrer" > <img src={apple} alt='' className='apple' /> </a>
                        <a href='https://play.google.com/store/apps/details?id=com.starbucks.ph' target="_blank" rel="noreferrer" > <img src={playstore} alt='' className='playstore' /> </a>
                    </div>
                </div>

            </div>

            <div className='order-content-container'>
                <p className='order-paragraph'>
                    As a Starbucks Rewards member, you can now place an order and pay ahead with Mobile Order & Pay.
                    That means you can walk in and without waiting in line, ask a barista for your freshly made drink
                    at the pickup area. You’ll also collect Stars on all mobile orders!
                </p>

                <div className='order-column-wide'>
                    <div className='order-column-text'>
                        <h2> Login </h2>
                        <p >
                            Register to Starbucks® Rewards or login to your account if you’re already a member. You’ll need a Starbucks®
                            Rewards account to use Mobile Order & Pay.
                        </p>
                    </div>

                    <div className='order-image-box'>
                        <div className='order-image' style={{ backgroundImage: `url(${first})` }}> </div>
                    </div>
                </div>

                <div className='order-column-wide'>
                    <div className='order-image-box'>
                        <div className='order-image' style={{ backgroundImage: `url(${second})` }}> </div>
                    </div>

                    <div className='order-column-text'>
                        <h2> Order </h2>
                        <p >
                            Tap ORDER to choose and customize your favorite beverage and food then select
                            the nearest store and pickup option.
                        </p>
                    </div>
                </div>

                <div className='order-column-wide'>
                    <div className='order-column-text'>
                        <h2> Pay </h2>
                        <p >
                            Pay using your Starbucks® Rewards account and collect Stars on all mobile orders.
                        </p>
                    </div>

                    <div className='order-image-box'>
                        <div className='order-image' style={{ backgroundImage: `url(${fourth})` }}> </div>
                    </div>
                </div>

                <div className='order-column-wide'>
                    <div className='order-image-box'>
                        <div className='order-image' style={{ backgroundImage: `url(${fourth})` }}> </div>
                    </div>

                    <div className='order-column-text'>
                        <h2> Pick-up </h2>
                        <p >
                            Register to Starbucks® Rewards or login to your account if you’re already a member.
                            You’ll need a Starbucks® Rewards account to use Mobile Order & Pay.
                        </p>
                    </div>
                </div>


                <div className='order-dropdown-container'>
                    <div className='order-dropdown-title'>
                        <span> Frequently Asked Questions </span>
                    </div>


                    <div className='order-dropdown-box' >

                        <div className='content'

                            onClick={() => toggleContent(0)}>
                            <div className='order-question-and-btn' >
                                <div className='question'> What is Mobile Order & Pay? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 0 ? 'dropped' : ''}`} >
                                No time? No line. The Starbucks® Philippines mobile app for iPhone® or Android™ now allows Starbucks Rewards members
                                to place an order and pay ahead before they reach the store. Mobile Order & Pay means you can walk in or park in a
                                designated parking slot and then receive your freshly made order. The mobile ordering experience is seamlessly integrated
                                into Starbucks® Philippines mobile app and Starbucks® Rewards program.
                            </div>
                        </div>

                        <div className='content'

                            onClick={() => toggleContent(1)}>
                            <div className='order-question-and-btn'>
                                <div className='question'> Where is Mobile Order & Pay available?  </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 1 ? 'dropped' : ''}`} >
                                Mobile Order & Pay is available to use in all stores in the Philippines.
                            </div>
                        </div>

                        <div className='content'

                            onClick={() => toggleContent(2)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> How do I get Mobile Order & Pay on my phone? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 2 ? 'dropped' : ''}`} >
                                Gaining access to Mobile Order & Pay is easy, with only a few simple steps needed:
                                1. Download the latest Starbucks® Philippines app for iPhone® and Android™. If you are
                                an existing user of the app, check the App Store or Play Store to ensure the app has been
                                updated to the latest version. 2. Ensure location services are turned on to allow the app
                                to display the eligible stores. 3. Register to become a Starbucks® Rewards member if you
                                aren’t already, or log into your account. Customers first need to register as a Starbucks®
                                Rewards member to use of Mobile Order & Pay. 4. Click on the "Order" option from the menu on
                                the bottom panel of the screen and you are ready to use Mobile Order & Pay.
                            </div>
                        </div>

                        <div className='content'

                            onClick={() => toggleContent(3)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> How do I place an order? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 3 ? 'dropped' : ''}`} >
                                To use Mobile Order & Pay, customers follow five easy steps: 1. Click on the "Order" option from
                                the menu on the bottom panel of the screen. 2. Select the beverage and/or food items to order: Just
                                as in our stores, beverages are customizable, including numerous options to modify size, number of
                                espresso shots, dairy selections and more. You can order a maximum of 15 items per mobile order. 3.
                                Select the store for pick up: Approximate wait times will be viewable on the customer’s phone prior
                                to selecting store location. Menu items will also be updated based on availability after the store is
                                selected. Directions will also be available, if needed. 4. Select preferred the pickup option available
                                in the selected store. 5. Confirm by clicking "Order". At the time of order, payment is made from the
                                customer’s default registered Starbucks Card in the app. 6. Proceed to the selected Starbucks® store to
                                pick up your beverages and/or food: Orders are immediately sent to the selected store where baristas will
                                begin preparing the items. When baristas have finished your order, you will receive a push notification
                                provided by Starbucks® Philippines app.
                            </div>
                        </div>

                        <div className='content'

                            onClick={() => toggleContent(4)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> Will I earn Stars on my mobile order? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 4 ? 'dropped' : ''}`} >
                                Yes, you will earn Stars on your mobile order following the Starbucks Rewards terms of use.
                            </div>
                        </div>

                        <div className='content'

                            onClick={() => toggleContent(5)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> Can I redeem rewards vouchers with my mobile order? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 5 ? 'dropped' : ''}`} >
                                Yes, you can redeem rewards vouchers on eligible mobile order following the Starbucks Rewards terms of use.
                            </div>
                        </div>

                        <div className='content'

                            onClick={() => toggleContent(6)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> How do I pick up my order?  </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 6 ? 'dropped' : ''}`} >
                                When our store partners have finished your order, you will receive a push notification provided by Starbucks® Philippines app.
                                You can also go to the store where you placed your order within the estimated pick-up time and head to where you'd normally
                                pick up your beverages and/or food. For in-store pickup, once at the hand-off area, tell the barista your name and present
                                your order details to enjoy your mobile order. For curbside, check-in in the app once at the designated parking slot.
                                This will inform the barista to bring deliver your mobile order.
                            </div>
                        </div>

                        <div className='content'
                            onClick={() => toggleContent(7)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> How do I choose which store to place my order at? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 7 ? 'dropped' : ''}`} >
                                When you use Mobile Order & Pay for the first time, the app will default to the closest participating Starbucks® store to your current location.
                                The app will also display the current menu availability and estimated pick-up time for your order from that store. You can change stores by tapping
                                the map or using the "Search" function. Once your order is submitted, you cannot change the pick up store. After you’ve made your first Mobile Order
                                & Pay order, the app will default to the store where you made your most recent Mobile Order & Pay purchase.
                            </div>
                        </div>

                        <div className='content'
                            onClick={() => toggleContent(8)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> What can I purchase on Mobile Order & Pay? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 8 ? 'dropped' : ''}`} >
                                Almost all of your favorite Starbucks beverages and food are available through Mobile Order & Pay. The Order section of the app has a menu which lists all
                                available offerings at the participating store. With a few taps on your phone, you can customize your favorite beverages and choose to have food items served warm,
                                just as you can with in store orders.
                            </div>
                        </div>

                        <div className='content'
                            onClick={() => toggleContent(9)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> Are any in-store items not available on the Mobile Order & Pay menu? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 9 ? 'dropped' : ''}`} >
                                While almost all of your favorite Starbucks beverages and food are available through Mobile Order & Pay, at this stage we are not currently offering some Limited-time Offer items,
                                some Starbucks Reserve™ hand-brewed beverage, merchandise, whole beans for Mobile Order & Pay.
                            </div>
                        </div>

                        <div className='content'
                            onClick={() => toggleContent(10)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> Is there a maximum number of items that can be ordered through Mobile Order & Pay? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 10 ? 'dropped' : ''}`} >
                                You can order a maximum of 15 items.
                            </div>
                        </div>

                        <div className='content'
                            onClick={() => toggleContent(11)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> How close to store closing time can I place a Mobile Order & Pay order? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 11 ? 'dropped' : ''}`} >
                                You can place a Mobile Order up to 30 minutes before the store closes.                            </div>
                        </div>

                        <div className='content'
                            onClick={() => toggleContent(12)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> Can I place an order before a store is open? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 12 ? 'dropped' : ''}`} >
                                At this time, mobile orders can only be made once the store is open.
                            </div>
                        </div>

                        <div className='content'
                            onClick={() => toggleContent(13)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> How long will my order take through Mobile Order & Pay? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 13 ? 'dropped' : ''}`} >
                                When you place your order, you will be given an estimated pick up time. Times will vary according to the store and time of day.
                                You will also receive a push notification when your order is ready at store.
                            </div>
                        </div>

                        <div className='content'
                            onClick={() => toggleContent(14)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> Why didn’t I receive push notification for my Mobile Order? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 14 ? 'dropped' : ''}`} >
                                Please ensure Notifications are allowed under Settings in the Starbucks® Philippines app and your mobile device in order
                                to receive push notification when your Mobile Order is ready for pick up at store.
                            </div>
                        </div>

                        <div className='content'
                            onClick={() => toggleContent(15)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> Can I cancel or change the wait time of my order after I’ve placed it? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 15 ? 'dropped' : ''}`} >
                                No. After placing an order through Mobile Order & Pay, it is immediately sent to the selected store and our baristas will begin preparing the order.
                                Once the app displays the approximate wait time, you cannot change the wait time of the order.
                            </div>
                        </div>

                        <div className='content'
                            onClick={() => toggleContent(16)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> What is the average wait-time for a Mobile Order & Pay order? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 16 ? 'dropped' : ''}`} >
                                Wait times vary per store, depending on a variety of factors, such as peak hours.
                            </div>
                        </div>

                        <div className='content'
                            onClick={() => toggleContent(17)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> I am an existing Starbucks® Philippines app user. How do I access the Order feature? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 17 ? 'dropped' : ''}`} >
                                Make sure you have installed the most recent update for the app. Check the App Store or Google Play to see if there is an available
                                update. In some cases, users may need to delete the old version of the app and reinstall the latest version.
                            </div>
                        </div>

                        <div className='content'
                            onClick={() => toggleContent(18)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> Can I order the drink to arrive at a time of my choosing? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 18 ? 'dropped' : ''}`} >
                                At this time, there isn’t an option to specify order pick-up time. After placing an order through Mobile Order & Pay, it is immediately sent
                                to the selected store and our baristas will begin preparing the order. The mobile ordering feature will provide you with an approximate wait time,
                                you can go to the selected store within the approximate wait time.
                            </div>
                        </div>


                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
