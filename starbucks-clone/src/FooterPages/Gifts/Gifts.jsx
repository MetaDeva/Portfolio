import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../Gifts/images/banner.jpeg'
import first from '../Gifts/images/first.png'
import second from '../Gifts/images/second.png'
import third from '../Gifts/images/third.png'
import fourth from '../Gifts/images/fourth.png'
import fifth from '../Gifts/images/fifth.png'
import last from '../Gifts/images/last.png'

import drop from '../Order/images/dropdown-btn.svg'

import './Gifts.css'

export default function Gifts() {

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
            <div className='gifts--banner-section' style={{ backgroundImage: `url(${banner})` }}>

                <div className='gifts--banner-content' >
                    <h1> Starbucks® eGift </h1>
                    <h3>
                        Send Starbucks eGifts for any occasion you’re celebrating, whether it's saying thanks,
                        recognizing an achievement, or simply letting someone know you are thinking of them.
                    </h3>
                    <button onClick={scrollToElement}> Learn More </button>
                </div>

            </div>

            <div className='gifts-content-container' ref={articleRef}>
                <div className='gifts-content-textbox'>
                    <h1> Occasions Made Special </h1>
                    <p> Send Starbucks® eGift for any occasions through GLife on GCash. </p>
                </div>


                <div className='mint gifts-column-wide'>
                    <div className='gifts-column-text'>
                        <h2> Share the love </h2>
                        <p >
                            Here's how to send Starbucks eGifts through GLife on GCash
                        </p>
                    </div>

                    <div className='gifts-image-box'>
                        <div className='gifts-image' style={{ backgroundImage: `url(${first})` }}> </div>
                    </div>
                </div>

                <div className='gifts-column-wide'>
                    <div className='gifts-column-text'>
                        <h2> Step 1 </h2>
                        <p >
                            Open GCash to access GLife
                        </p>
                    </div>

                    <div className='gifts-image-box'>
                        <div className='gifts-image' style={{ backgroundImage: `url(${second})` }}> </div>
                    </div>
                </div>

                <div className='gifts-column-wide'>
                    <div className='gifts-column-text'>
                        <h2> Step 2 </h2>
                        <p >
                            Search Starbucks and click 'Order Now'
                        </p>
                    </div>

                    <div className='gifts-image-box'>
                        <div className='gifts-image' style={{ backgroundImage: `url(${third})` }}> </div>
                    </div>
                </div>

                <div className='gifts-column-wide'>
                    <div className='gifts-column-text'>
                        <h2> Step 3 </h2>
                        <p >
                            Choose eGift amount, checkout and pay using GCash
                        </p>
                    </div>

                    <div className='gifts-image-box'>
                        <div className='gifts-image' style={{ backgroundImage: `url(${fourth})` }}> </div>
                    </div>
                </div>

                <div className='gifts-column-wide'>
                    <div className='gifts-column-text'>
                        <h2> Step 4 </h2>
                        <p >
                            Copy and send eGift link through messaging apps
                        </p>
                    </div>

                    <div className='gifts-image-box'>
                        <div className='gifts-image' style={{ backgroundImage: `url(${fifth})` }}> </div>
                    </div>
                </div>

                <div className='mint gifts-column-wide'>
                    <div className='gifts-column-text'>
                        <h2> Redeem eGift by scanning QR code in any Starbucks stores. Enjoy! </h2>
                    </div>

                    <div className='gifts-image-box'>
                        <div className='gifts-image' style={{ backgroundImage: `url(${last})` }}> </div>
                    </div>
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
                            <div className='question'> How can I purchase a Starbucks eGift? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 0 ? 'dropped' : ''}`} >
                            Starbucks eGift is now available through the GLife mini program of GCash. If you are an existing GCash member,
                            log-in to your GCash account, go to GLife section and search for Starbucks.
                        </div>
                    </div>

                    <div className='content'

                        onClick={() => toggleContent(1)}>
                        <div className='order-question-and-btn'>
                            <div className='question'> What are the Starbucks eGift values available?  </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 1 ? 'dropped' : ''}`} >
                            The Starbucks eGift is valued at P300, P500, P1,000 and P2,000.
                        </div>
                    </div>

                    <div className='content'

                        onClick={() => toggleContent(2)}
                    >
                        <div className='order-question-and-btn'>
                            <div className='question'> Is there a maximum quantity that I can purchase per eGift value? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 2 ? 'dropped' : ''}`} >
                            Yes, you can order a maximum quantity of 10 per eGift value per single transaction.
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
                            The Starbucks eGift mini app on GLife will only accept GCash payment. Make sure you have balance on your GCash account!
                        </div>
                    </div>

                    <div className='content'

                        onClick={() => toggleContent(4)}
                    >
                        <div className='order-question-and-btn'>
                            <div className='question'> Can I share the Starbucks eGift to my family or friends? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 4 ? 'dropped' : ''}`} >
                            Yes! You can send the Starbucks eGift to family or friends. Simply copy the link of the eGift and share to your family or friends via a messaging app,
                            email or social channels. But please remember that whoever have access to the link, will be able to use the eGift voucher. Share responsibly!
                        </div>
                    </div>


                    <div className='content'

                        onClick={() => toggleContent(5)}
                    >
                        <div className='order-question-and-btn'>
                            <div className='question'> What products can I purchase using the Starbucks eGift? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 5 ? 'dropped' : ''}`} >
                            The Starbucks eGift may only be used to purchase any item (except Starbucks gift certificates and activating or adding load to a Starbucks Card) in all Starbucks stores in the Philippines.
                        </div>
                    </div>

                    <div className='content'

                        onClick={() => toggleContent(6)}
                    >
                        <div className='order-question-and-btn'>
                            <div className='question'> How can I use the Starbucks eGift? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 6 ? 'dropped' : ''}`} >
                            Simply inform your barista that you will use a Starbucks eGift to pay. Access the Starbucks eGift QR code on your mobile app or a print-out of the email with the QR code and scan to pay.                        </div>
                    </div>

                    <div className='content'

                        onClick={() => toggleContent(7)}
                    >
                        <div className='order-question-and-btn'>
                            <div className='question'> If my total purchase amount is lower than the eGift value, what will happen to the remaining balance? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 7 ? 'dropped' : ''}`} >
                            The Starbucks eGift may only be used to make purchases up to the initial eGift value. The eGift value must be used in full. If the customer wishes to make a purchase for an amount that exceeds the eGift value, he must pay the excess using another payment method.                        </div>
                    </div>

                    <div className='content'

                        onClick={() => toggleContent(8)}
                    >
                        <div className='order-question-and-btn'>
                            <div className='question'> Will the Starbucks eGift expire? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 8 ? 'dropped' : ''}`} >
                            The Starbucks eGift does not expire, nor does Starbucks charge fees. It cannot be redeemed for cash unless required by law.                        </div>
                    </div>

                    <div className='content'

                        onClick={() => toggleContent(9)}
                    >
                        <div className='order-question-and-btn'>
                            <div className='question'> Can the eGift be used with other tenders? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 9 ? 'dropped' : ''}`} >
                            Yes. Split transaction is allowed and the eGift can be combined or used together with other tenders to settle a transaction.                        </div>
                    </div>

                    <div className='content'

                        onClick={() => toggleContent(10)}
                    >
                        <div className='order-question-and-btn'>
                            <div className='question'> Can I use several eGift as payment? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 10 ? 'dropped' : ''}`} >
                            Yes. You can use several valid eGifts as payment. Barista just need to scan all the eGift QR code one at a time.                        </div>
                    </div>


                </div>

            </div>
            <Footer />
        </div>
    )
}
