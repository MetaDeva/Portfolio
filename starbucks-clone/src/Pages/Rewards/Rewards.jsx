import React from 'react'
import '../Rewards/Rewards.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import first from '../Rewards/images/first-pic.png'
import stars from '../Rewards/images/stars.png'
import phone from '../Rewards/images/phone.jpg'
import animated from '../Rewards/images/breadAnimated.gif'
import fifth from '../Rewards/images/fifth-banner.jpg'
import mobile from '../Rewards/images/mobile.png'
import apple from '../Rewards/images/applestore.svg'
import playstore from '../Rewards/images/playstore.svg'
import drop from '../Rewards/images/dropdown-btn.svg'


export default function Rewards() {

    const [active, setActive] = React.useState(null)

    function toggleContent(index) {
        setActive((prevActive) => (prevActive === index ? null : index))
    }

    return (
        <div>
            <Header />

            <div className='rewards-first--section'>
                <div className='rewards-image-box'>
                    <img src={first} alt='first' />
                </div>
                <div className='rewards-text-box'>
                    <h1> That first sip of feeling </h1>
                    <h3> Say hello to endless choices and - yes, free coffee.  </h3>
                </div>
            </div>

            <div className='rewards-second--section'>
                <div className='second-section-content'>
                    <img className='stars' src={stars} alt='stars' />
                    <span className='title'> Collect Stars with every sip </span>
                    <p> Wether you visit once a month or every day, we're always glad to see you. And we want you to enjoy rewards
                        <span className='bold-text'> Just pay with a registered Starbucks Card or app, and you'll collect 1 Start for every ₱25 spent  </span>
                    </p>
                    <img className='phone' src={phone} alt='phone' />
                </div>
            </div>

            <div className='rewards-third-section'>
                <div className='third-section-content'>
                    <span className='title'> Get your favorite things for free </span>
                    <p> As a member you'll collect Stars on almost everything you buy and those Stars add up to (some really delicious)
                        rewards. Get a free drink, pastry or slice of cake with every <span className='bold-text'> 100 Stars </span> you collect.</p>
                    <span className='description'> Drink reward is applicable to any handcrafted drink of any size except Starbucks Reserve ice cream beverages.
                        Food reward excludes sandwiches, salads, pasta, or bistro box.
                    </span>
                    <img src={animated} alt='animated' className='animated-gif' />
                </div>
            </div>

            <div className='rewards-fourth-section'>
                <div className='fourth-section-content '>
                    <img src={stars} className='stars' alt='' />

                    <span className='title'> Start earning Stars instantly </span>

                    <div className='span-box'>
                        <span>
                            Collect twice the number of Stars on every purchase on your first week as a member
                            <hr />
                            Collect twice the number of Stars on the launch of new drinks. *
                        </span>
                        <span>
                            Collect twice the number of Stars on the random day every month.
                            <hr />
                            Plust enjoy a free drink, pastry or slice of cake on your birthday.**
                        </span>
                    </div>


                    <div className='p-box'>
                        <p> Applicable to members with eligible purchases. </p>
                        <p> *Applicable on the first day of launch of promotional drinks </p>
                        <p>**Member must join at least 7 days before birthday and make at least 1 qualifying purchase within the last 30 days. One-time offer only </p>
                    </div>
                </div>
            </div>

            <div className='rewards-fifth-section' style={{ backgroundImage: `url(${fifth})` }} alt=''></div>

            <div className='rewards-sixth-section'>
                <span> Download the app for the best experience </span>
                <div className='semi-overlay'>
                    <div className='image-box'>
                        <img src={mobile} alt='' />
                    </div>
                    <div>
                        <div className='semi-overlay-text-box'>
                            <p> Load your account, pay with your phone, track your Stars and redeem Rewards </p>
                            <p> The app might just be the best part of Starbucks Rewards </p>
                            <div className='image-row-box'>
                                <a href='https://apps.apple.com/ph/app/starbucks-philippines/id1363216428' target="_blank" rel="noreferrer" > <img src={apple} alt='' /> </a>
                                <a href='https://play.google.com/store/apps/details?id=com.starbucks.ph' target="_blank" rel="noreferrer" > <img src={playstore} alt='' /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='rewards-seventh-section'>
                <div className='title'>
                    <span> Frequently Asked Questions </span>
                </div>


                <div className='dropdown-container' >

                    <div className='content'

                        onClick={() => toggleContent(0)}>
                        <div className='questionbtn' >
                            <div className='question'> How do I earn Stars? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 0 ? 'dropped' : ''}`} >
                            You must pay with your registered Starbucks card (or your registered Card in the mobile app)
                            in order to earn Stars. You will earn 1 Star for every Php25 spent on beverage, food or merchandise purchased from our stores.
                            Stars cannot be earned on purchases of gift certificate, Starbucks Cards or Starbucks Card reloads.
                            <br />
                            <br />
                            Purchases in the official Starbucks online store on Lazada:
                            <br />
                            Once your Starbucks Rewards account has been successfully linked to your Lazada account, you will earn Stars based on the value of your
                            purchase in the official Starbucks online store on Lazada using any type of payment – cash, debit card, credit card, Lazada wallet at the
                            rate of 1 Star for every ₱40 spent.
                        </div>
                    </div>

                    <div className='content'

                        onClick={() => toggleContent(1)}>
                        <div className='questionbtn'>
                            <div className='question'> What rewards can I redeem with Stars?  </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 1 ? 'dropped' : ''}`} >
                            Every 100 Stars you collect converts to a Reward Voucher that can be used to redeem your choice of a handcrafted beverage of any size
                            (excluding premium Starbucks Reserve coffee and ice cream beverages) or a food item from our bakery and cake menu. Add-ons in beverages
                            will be paid for by the member. Only 1 reward can be redeemed per transaction.
                        </div>
                    </div>

                    <div className='content'

                        onClick={() => toggleContent(2)}
                    >
                        <div className='questionbtn'>
                            <div className='question'> Do Stars expire? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 2 ? 'dropped' : ''}`} >
                            Yes. All Stars earned are valid for redemption for one (1) year, starting on the date of your registration. Stars that are not converted to
                            Reward Vouchers will expire on your Anniversary Date (date of registration) each year. For members previously registered to My Starbucks
                            Rewards, Anniversary Date is defaulted to July 16.
                        </div>
                    </div>

                    <div className='content'

                        onClick={() => toggleContent(3)}
                    >
                        <div className='questionbtn'>
                            <div className='question'> Do reward vouchers expire? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 3 ? 'dropped' : ''}`} >
                            Reward Vouchers are automatically and electronically loaded to the member’s Starbucks Rewards account and is valid for 90 days from the exact date
                            and time of issuance.
                        </div>
                    </div>

                    <div className='content'

                        onClick={() => toggleContent(4)}
                    >
                        <div className='questionbtn'>
                            <div className='question'> What will happen to my old My Starbucks Rewards account? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 4 ? 'dropped' : ''}`} >
                            If you're previously registered to My Starbucks Rewards, you are automatically transitioned to the new program. Members will be prompted to update their
                            password in the website upon logging in. If you’re using the app to pay, you will also be prompted to download the latest app version and to update your
                            password. Members should add a newly activated Starbucks Card to their account to start paying and earning Stars.
                        </div>
                    </div>

                    <div className='content'

                        onClick={() => toggleContent(5)}
                    >
                        <div className='questionbtn'>
                            <div className='question'> What will happen to the remaining balance of my cards from the old My Starbucks Rewards? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 5 ? 'dropped' : ''}`} >
                            You won't lose your load. Your balance as of July 16, 2020 will remain intact even if the physical card itself can’t be used. Visit our stores to transfer your
                            remaining balance of Php 100 and above to a new Starbucks Card from your account or unregistered card, while cash refund will be given if your remaining balance is Php 99 or less.
                        </div>
                    </div>

                    <div className='content'

                        onClick={() => toggleContent(6)}
                    >
                        <div className='questionbtn'>
                            <div className='question'> How do I check the remaining balance of my cards from the old My Starbucks Rewards?  </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 6 ? 'dropped' : ''}`} >
                            You can check the remaining balance of old registered and unregistered cards by bringing them to the store or by calling the Customer Care hotline at 02-84626262 (Metro Manila)
                            and 1-800-10-4626262 (Provincial). You can also check the remaining balance of old registered cards by accessing your account through the latest version of the mobile app. Once logged in to the app,
                            go to Profile then click Refund Unused Balance.
                        </div>
                    </div>

                    <div className='content'
                        onClick={() => toggleContent(7)}
                    >
                        <div className='questionbtn'>
                            <div className='question'> Will the new card issued with the remaining balance of my old cards be automatically registered to my account? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 7 ? 'dropped' : ''}`} >
                            No. You should add the newly issued card to your account. To do this, login your account details on the website or mobile app and add a new card.
                        </div>
                    </div>

                    <div className='content'
                        onClick={() => toggleContent(8)}
                    >
                        <div className='questionbtn'>
                            <div className='question'> I am an existing Starbucks Rewards member, how can I earn Stars on my Lazada purchase? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 8 ? 'dropped' : ''}`} >
                            Go to the Starbucks Flagship store page, and click on MEMBER tab. Click on Link Existing Membership. Accept the T&C and sign-in using your Starbucks Rewards
                            registered email and password. Wait for the linking to process. Successful linking will display the Member details page.
                            <br />
                            <br />
                            Once the Starbucks Rewards account is successfully linked to the Lazada account, you will now start earning 1 Star for every P40 spent on the Starbucks Flagship store
                            on Lazada starting June 16, 2022.
                            <br />
                            <br />
                            IMPORTANT REMINDER:
                            <br />
                            Only purchases from the official Starbucks Flagship store will earn Stars. Orders made in Starbucks at Home store or other stores on Lazada are not eligible.
                        </div>
                    </div>

                    <div className='content'
                        onClick={() => toggleContent(9)}
                    >
                        <div className='questionbtn'>
                            <div className='question'> When will the Stars I earned from my Lazada purchase be credited to my Starbucks Rewards account? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 9 ? 'dropped' : ''}`} >
                            The Stars will be credited to your Starbucks Rewards account after 7 days upon successful delivery of your order. Any Stars earned from a cancelled or returned or
                            refunded order will be adjusted (debited) from the Starbucks Rewards account.
                        </div>
                    </div>

                    <div className='content'
                        onClick={() => toggleContent(10)}
                    >
                        <div className='questionbtn'>
                            <div className='question'> Can I earn Stars on purchases from other merchants on Lazada? </div>
                            <img src={drop} alt='' />
                        </div>
                        <div className={`answers ${active === 10 ? 'dropped' : ''}`} >
                            Only orders from the Starbucks Flagship store on Lazada will earn Stars. Purchases from other merchants or “Starbucks at Home” store or “Starbucks Ready-to-Drink” store are not eligible.
                        </div>
                    </div>
                </div>

                <div className='hr-box'>

                    <hr />

                </div>

                <div className='more-questions-box'>
                    <span className='more-questions'> More Questions? </span>
                    <p> We want to help in any way we can. We’ve answered the most commonly asked questions. <span> right over here </span> </p>
                    <p> If you can't find what you're looking for, here's how to <span> get in touch</span> with us </p>
                </div>

                <div className='terms-of-use-box'>
                    <span className='terms'> Terms of Use </span>
                    <p> For full details on Stars and Starbucks® Rewards program, read our terms of use <span> here </span>
                        <br />
                        <br />
                        DTI Fair Trade Permit No. FTEB-136689 Series of 2022

                    </p>
                </div>
            </div>
            <Footer />
        </div >
    )
}
