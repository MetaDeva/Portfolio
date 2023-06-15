import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { NavLink, Link } from "react-router-dom";

import banner from '../Partnership/images/banner.jpg'
import second from '../Partnership/images/second.png'
import phone1 from '../Partnership/images/phone-1.png'
import phone2 from '../Partnership/images/phone-2.png'
import phone3 from '../Partnership/images/phone-3.png'
import phone4 from '../Partnership/images/phone-4.png'
import thumbnail from '../Partnership/images/thumbnail.jpg'
import sixthfirst from '../Partnership/images/sixth-first.png'
import sixthsecond from '../Partnership/images/sixth-second.png'
import logo from '../Partnership/images/starbucks-logo.svg'
import drop from '../Order/images/dropdown-btn.svg'
import point from '../Partnership/images/point-phone.jpg'

import './Partnership.css'

export default function Partnership() {

    const articleRef = React.useRef(null)

    const [active, setActive] = React.useState(null)

    const [videoPlayed, setVideoPlayed] = React.useState(false)

    const [navToggled, setNavToggled] = React.useState(false)

    // Toggling Nav Burger
    function navToggledFunction() {
        setNavToggled(toggle => !toggle)
    }

    function playVideo() {
        setVideoPlayed(data => !data)
    }

    // Scroll to Element (Button Banner)
    function scrollToElement() {
        articleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Toggle Dropdown
    function toggleContent(index) {
        setActive((prevActive) => (prevActive === index ? null : index))
    }

    // Scroll to the very beginning
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div>
            <Header
                toggleFunction={navToggledFunction}
                toggled={navToggled}
            />

            <div className='partner--banner-section' style={{ backgroundImage: `url(${banner})` }}>

                <div className='partner--banner-content'>
                    <h1> More rewards with every Grab order </h1>
                    <h3> Our new partnership with Grab lets you collect more Stars. </h3>
                    <NavLink
                        to="/rewards"
                        onClick={handleLinkClick}
                        activeclassname="active"
                    >
                        <button> Join Now </button>
                    </NavLink>

                </div>

            </div>

            <div className='partner--content-container'>

                <div className='partner-first-content'>
                    <div className='partner-first-textbox-left'>
                        <h3> THE STARBUCKS AND GRAB PARTNERSHIP </h3>
                        <h1> A more rewarding experience </h1>
                    </div>
                    <div className='partner-first-textbox-right'>
                        <p>
                            As a Starbucks Rewards member, you'll collect 1 Star for every ₱40 spent
                            on Starbucks orders on GrabFood— no matter how you pay. Every 100 Stars add
                            up to a free drink, pastry or a slice of cake from any of our stores.
                        </p>
                        <button onClick={scrollToElement}> Learn More </button>
                    </div>
                </div>

                <div className='partner-second-content'>
                    <img src={second} alt='' />
                </div>

                <div className='partner-third-content' ref={articleRef}>
                    <div className='partner-third-content-textbox'>
                        <h3> HERE'S HOW IT WORKS </h3>
                        <h1> Connect your Starbucks Rewards and Grab Accounts </h1>
                        <p> Tap on the Grab app to get started. </p>
                    </div>
                </div>

                <div className='partner-fourth-content'>
                    <div className='fourth-content-box'>
                        <img src={phone1} alt='' />
                        <h3> 01 </h3>
                        <p> Add account on Grab before placing order. </p>
                    </div>

                    <div className='fourth-content-box'>
                        <img src={phone2} alt='' />
                        <h3> 02 </h3>
                        <p> Log in Starbucks Rewards Account details.  </p>
                    </div>

                    <div className='fourth-content-box'>
                        <img src={phone3} alt='' />
                        <h3> 03 </h3>
                        <p> Collect Stars on your Starbucks Rewards Account on every delivery. </p>
                    </div>

                    <div className='fourth-content-box'>
                        <img src={phone4} alt='' />
                        <h3> 04 </h3>
                        <p> Pay how you'd like on Grab — you'll collect Stars all ways. </p>
                    </div>
                </div>

                <div className='partner-fifth-content'>

                    <div className='partner-fifth-content-video-link-container'>

                        {videoPlayed ?
                            <div className='video-container'>
                                <video controls>
                                    <source src="https://starbucks.ph/videos/FY22StarbucksxGRABPartnershipVideo_16x9.mp4" type="video/mp4" />
                                </video>
                            </div>
                            :
                            <img src={thumbnail} alt='' onClick={playVideo} />
                        }

                    </div>

                    <div className='partner-fifth-textbox'>
                        <h3>
                            Check out our step-by-step tutorial.
                        </h3>

                        <div className='partner-fifth-buttonbox'>
                            {
                                videoPlayed ?
                                    <button onClick={playVideo}> Exit Video </button>
                                    :
                                    <button onClick={playVideo}> Watch the video </button>
                            }
                        </div>

                    </div>
                </div>

                <div className='partner-sixth-content'>
                    <div className='partner-sixth-textbox-left'>
                        <div className='partner-sixth-textbox-left-inner'>
                            <h3> HERE'S WHAT YOU GET </h3>
                            <h1> A more convenient and personalized Starbucks experience </h1>
                            <p> Our partnership with Grab gives you more benefits with every order. </p>
                            <button> Learn More </button>
                        </div>

                    </div>

                    <div className='partner-sixth-textbox-right'>
                        <div className='partner-sixth-textbox-first'>
                            <img src={sixthfirst} alt='' />
                            <div className='partner-sixth-textbox-right-first-inner'>
                                <h2> A seamless customer experience </h2>
                                <ul>
                                    <li> <span> Earn GrabRewards: </span> With every Starbucks order made through Grab, you'll also be able to earn GrabRewards points. </li>
                                    <li> <span> Paying using the same e-wallet: </span> Don't want to deal with cash? Use GrabPay to make purchases in the Grab app in Starbucks stores. </li>
                                    <li> <span> Ordering ahead: </span> Skip the line by ordering Starbucks ahead of time with GrabFood. We'll let you know when it's ready for pickup. </li>
                                    <li> <span> Gifting: </span> Send Starbucks gift cards to loved ones with GrabGifts. Feature is only available in the Philippines and coming soon to Thailand, Singapore, Malaysia, Indonesia and Vietnam. </li>
                                </ul>
                            </div>

                        </div>
                        <div className='partner-sixth-textbox-second'>
                            <img src={sixthsecond} alt='' />
                            <div className='partner-sixth-textbox-right-second-inner'>
                                <h2> A positive impact through Starbucks FoodShare </h2>
                                <p> In March, we launched our FoodShare food donation program in the Philippines,
                                    starting with stores in Metro Manila. Our partnership with Grab lets participating
                                    stores connect with Grab drivers to pick up food donations and deliver them to local
                                    non-profit organizations daily.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='partner-seventh-content'>
                    <div className='partner-seventh-textbox'>
                        <h2> " </h2>
                        <div className='partner-seventh-textbox-inner'>
                            <p>
                                Our partnership with Grab allows us to provide more options for our customers to create a Starbucks
                                Experience that is right for them, while also helping to deliver positive impact in the communities we
                                serve through FoodShare program.
                            </p>
                            <h3> Erin Silvoy </h3>
                            <h4> Vice President, Product and Marketing </h4>
                            <h5> Starbucks Asia Pacific </h5>
                        </div>
                    </div>
                    <div className='partner-seventh-imagebox'>
                        <img src={logo} alt='' />
                    </div>

                </div>

                <div className='partner-eight-content'>
                    <div className='partner-eight-dropdown-title'>
                        <span> Frequently Asked Questions </span>
                    </div>


                    <div className='partner-eight-content-dropdown-box' >

                        <div className='content'

                            onClick={() => toggleContent(0)}>
                            <div className='order-question-and-btn' >
                                <div className='question'> How can I collect Stars on Starbucks orders on GrabFood? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 0 ? 'dropped' : ''}`} >
                                To collect Stars on Starbucks orders on GrabFood, members must link their Starbucks Rewards account to a Grab app account.
                                To link accounts for the first time: • Go to the Food tile on the Grab app and search for Starbucks to order.
                                • Once you’ve completed your order, go to the ‘Loyalty and Membership’ section on the Order Summary page. Click
                                ‘Add Account’ and type in your Starbucks Rewards log-in details. • Once you’ve received a notification that you’ve
                                successfully linked your accounts, you will start collecting Stars on all paid and completed GrabFood deliveries.
                                There’s no need to link accounts every time you order Starbucks on GrabFood.
                            </div>
                        </div>

                        <div className='content'

                            onClick={() => toggleContent(1)}>
                            <div className='order-question-and-btn'>
                                <div className='question'> I do not have a Starbucks Rewards account. How do I register for one?  </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 1 ? 'dropped' : ''}`} >
                                Visit a Starbucks store and activate a Starbucks Card with a minimum of P300. Download the Starbucks PH app or go to
                                Starbucks PH website to register your Starbucks Card to an account.
                            </div>
                        </div>

                        <div className='content'

                            onClick={() => toggleContent(2)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> Can I collect Stars on orders from other establishments on GrabFood? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 2 ? 'dropped' : ''}`} >
                                No. Stars are only earned on orders from the Starbucks menu on GrabFood.
                            </div>
                        </div>

                        <div className='content'

                            onClick={() => toggleContent(3)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> Should members pay using a Starbucks Card to collect Stars on Starbucks orders on GrabFood? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 3 ? 'dropped' : ''}`} >
                                No. You will collect Stars using any payment option available in the Grab app.
                            </div>
                        </div>

                        <div className='content'

                            onClick={() => toggleContent(4)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> How many Stars will I collect on Starbucks orders on GrabFood? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 4 ? 'dropped' : ''}`} >
                                You’ll collect 1 Star for every P40 spent on Starbucks orders on GrabFood after successfully linking your Starbucks Rewards and Grab app accounts.
                            </div>
                        </div>

                        <div className='content'

                            onClick={() => toggleContent(5)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> Will I collect Stars on delivery fees and discounts? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 5 ? 'dropped' : ''}`} >
                                Delivery fees and promotional discounts will not earn Stars
                            </div>
                        </div>

                        <div className='content'

                            onClick={() => toggleContent(6)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> Where can I track how many Stars I collect on Starbucks orders on GrabFood? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 6 ? 'dropped' : ''}`} >
                                Base Stars earned from your Starbucks order will be displayed on the Grab app’s ‘Loyalty and Membership’ section on the Order Summary page. Bonus Stars earned from special promotions and Rewards Vouchers can be found in your Starbucks PH app or web account
                            </div>
                        </div>

                        <div className='content'

                            onClick={() => toggleContent(7)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> When will Stars be credited to my Starbucks Rewards account? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 7 ? 'dropped' : ''}`} >
                                Stars collected will be credited to your Starbucks Rewards account after your order is successfully paid and delivered.
                            </div>
                        </div>

                        <div className='content'

                            onClick={() => toggleContent(8)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> What rewards can I redeem with Stars collected? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 8 ? 'dropped' : ''}`} >
                                Every 100 Stars collected will automatically convert to one (1) Reward Voucher in your Starbucks Rewards account. Reward Vouchers can be used to redeem a free drink (any size), select bakery items or a slice of cake at our physical store.
                            </div>
                        </div>


                        <div className='content'

                            onClick={() => toggleContent(9)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> Can I use Stars to redeem Grab Rewards? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 9 ? 'dropped' : ''}`} >
                                No. Stars earned on GrabFood orders and converted to Reward Vouchers can only be used to redeem a free drink (any size), select bakery items or a slice of cake at our physical store.
                            </div>
                        </div>


                        <div className='content'

                            onClick={() => toggleContent(10)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> Will Stars or Rewards Voucher expire? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 10 ? 'dropped' : ''}`} >
                                An issued Reward Voucher has validity of 90 days upon date and time of issuance.
                                It will be removed from your Starbucks Rewards account once it expires. Stars that are not converted to a Rewards Voucher
                                will expire annually on your Anniversary Day (date you joined Starbucks Rewards).
                            </div>
                        </div>


                        <div className='content'

                            onClick={() => toggleContent(11)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> Why is the spend requirement to collect Stars in Grab higher than the physical Starbucks store? </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 11 ? 'dropped' : ''}`} >
                                As our Starbucks Rewards program continues to evolve, we continue to strive to provide the best for our customers. By integrating Starbucks
                                Rewards within the Grab app, we hope it gives you a convenient and faster way to earn rewards. Stay tuned for exclusive Starbucks Rewards promotions for GrabFood.                            </div>
                        </div>


                        <div className='content'

                            onClick={() => toggleContent(12)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> I have concerns with my GrabFood delivery. </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 12 ? 'dropped' : ''}`} >
                                For any concerns with GrabFood, access the Help Centre in the Grab app or visit GrabFood FAQs, https://www.grab.com/ph/food
                            </div>
                        </div>


                        <div className='content'

                            onClick={() => toggleContent(13)}
                        >
                            <div className='order-question-and-btn'>
                                <div className='question'> I have concerns with Stars collected from my GrabFood delivery. </div>
                                <img src={drop} alt='' />
                            </div>
                            <div className={`answers ${active === 13 ? 'dropped' : ''}`} >
                                For Starbucks Rewards concerns, call the hotline at +632-8462-6262 (Metro Manila), 1-800-10-4626262 (domestic toll-fee via PLDT). You may also email card@starbucks.ph.
                            </div>
                        </div>

                    </div>

                </div>

                <div className='partner-ninth-content'>
                    <div className='partner-ninth-imagebox'>
                        <img src={point} alt='' />
                    </div>
                    <div className='partner-ninth-textbox'>
                        <h1> Not yet a Starbucks Rewards member? </h1>
                        <h2> Join now to start earning Rewards. </h2>
                        <NavLink
                            to="/login"
                            onClick={handleLinkClick}
                        >
                            <button> Join Now </button>
                        </NavLink>
                        <h2> Or <Link to="/order" onClick={handleLinkClick}> join in the app </Link> join in the app for the best experience </h2>
                    </div>
                </div>

                <div className='partner-tenth-content'>
                    <div className='partner-tenth-textbox'>
                        <h1> Partnership Terms & Conditions </h1>
                        <h2> For full details on the program, read our terms of use here. </h2>
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    )
}
