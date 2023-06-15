import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './Careers.css'

import first from '../Careers/images/first.png'
import community from '../Careers/images/community.png'
import diversity from '../Careers/images/diversity.png'
import sustainability from '../Careers/images/sustainability.png'
import free from '../Careers/images/free.png'
import health from '../Careers/images/health.png'
import vacation from '../Careers/images/vacation.png'

export default function Careers() {

    const [navToggled, setNavToggled] = React.useState(false)

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
            <div className='careers-section-container'>

                <div className='careers-first-section'>

                    <div className='careers-first-textbox'>

                        <h1> Join the Starbucks Team </h1>

                        <h3>
                            Looking for a fulfilling career that's more than just making coffee?
                            Join the Starbucks team and become part of a company that values community,
                            sustainability, and personal growth.
                        </h3>
                    </div>

                    <div className='careers-first-imagebox'>
                        <img src={first} alt='' />
                    </div>

                </div>

                <div className='careers-second-section'>

                    <h1 className='colored'> Current Job Openings </h1>

                    <div className='careers-second-content-container'>
                        <div className='careers-second-content-box'>
                            <h1> Barista </h1>
                            <h3>
                                Make drinks, serve customers, and create a welcoming atmosphere.
                            </h3>
                        </div>

                        <div className='careers-second-content-box'>
                            <h1> Retail Store Manager </h1>
                            <h3>
                                Lead a team, manage inventory, and ensure store operations run smoothly.
                            </h3>
                        </div>

                        <div className='careers-second-content-box'>
                            <h1> Shift Supervisor </h1>
                            <h3>
                                Supervise and coach baristas, manage schedules, and handle customer service issues.                            </h3>
                        </div>

                        <div className='careers-second-content-box'>
                            <h1> Coffee Master </h1>
                            <h3>
                                Become an expert on coffee, educate customers and coworkers, and lead tastings.
                            </h3>
                        </div>
                    </div>

                </div>

                <div className='careers-wrapper'>


                    <div className='careers-third-section'>
                        <h1 className='colored'> Our Culture and Values </h1>

                        <div className='careers-third-content-container'>
                            <div className='careers-third-content-box'>
                                <h1> Community </h1>
                                <p>
                                    We believe in being actively involved in the communities
                                    we serve and making a positive impact on the world.
                                </p>
                                <div className='careers-third-imagebox'>
                                    <img src={community} alt='' />
                                </div>
                            </div>

                            <div className='careers-third-content-box'>
                                <h1> Diversity & Inclusion </h1>
                                <p>
                                    We value and celebrate diversity in all forms and strive to create
                                    an inclusive and welcoming environment where everyone feels respected and valued.
                                </p>
                                <div className='careers-third-imagebox'>
                                    <img src={diversity} alt='' />
                                </div>
                            </div>

                            <div className='careers-third-content-box'>
                                <h1> Sustainability </h1>
                                <p>
                                    We are committed to reducing our environmental impact and promoting
                                    sustainability in every aspect of our business.
                                </p>

                                <div className='careers-third-imagebox'>
                                    <img src={sustainability} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='careers-middle-section'>
                        <h1 className='colored'> Career Development Opportunities </h1>

                        <div className='careers-middle-content-container'>
                            <div className='careers-middle-content-box'>
                                <div>
                                    <h1> Training & Education </h1>
                                    <h4>
                                        We invest in our employees' success through ongoing training and development opportunities.
                                    </h4>
                                </div>

                                <ul>
                                    <li>Barista Basics and Coffee Master training</li>
                                    <li>Leadership and management programs</li>
                                    <li>Scholarships for higher education</li>
                                </ul>

                            </div>

                            <div className='careers-middle-content-box'>
                                <div>
                                    <h1> Career Pathing </h1>
                                    <h4>
                                        We support our employees in building meaningful careers with growth and development opportunities.
                                    </h4>
                                </div>
                                <ul>
                                    <li> Customized development plans for every partner</li>
                                    <li>Opportunities to advance within Starbucks</li>
                                    <li>Networking and mentorship programs</li>
                                </ul>

                            </div>

                            <div className='careers-middle-content-box'>
                                <div>
                                    <h1> Partner Resources </h1>
                                    <h4>
                                        We provide the tools and resources our employees need to succeed.
                                    </h4>
                                </div>
                                <ul>
                                    <li>Partner Hub with access to benefits information, training materials, and more</li>
                                    <li>Employee Assistance Program for mental health support and counseling services</li>

                                </ul>




                            </div>
                        </div>
                    </div>


                    <div className='careers-fourth-section'>
                        <h1 className='colored'> Benefits & Perks</h1>

                        <div className='careers-fourth-content-container'>
                            <div className='careers-fourth-content-box'>
                                <div className='careers-fourth-imagebox'>
                                    <img src={free} alt='' />
                                </div>
                                <h1> Health & Wellness</h1>
                                <p>
                                    Comprehensive health insurance, mental health resources, and fitness discounts.
                                </p>
                            </div>

                            <div className='careers-fourth-content-box'>
                                <div className='careers-fourth-imagebox'>
                                    <img src={health} alt='' />
                                </div>
                                <h1> Free Coffee</h1>
                                <p>
                                    Enjoy a free pound of coffee or box of tea every week.
                                </p>
                            </div>

                            <div className='careers-fourth-content-box'>
                                <div className='careers-fourth-imagebox'>
                                    <img src={vacation} alt='' />
                                </div>
                                <h1> Vacation Time </h1>
                                <p>
                                    Generous paid time off and holidays.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='careers-fifth-section'>

                    <h1 className='colored'> How to Apply </h1>

                    <div className='careers-fifth-content-container'>
                        <div className='careers-fifth-content-box'>
                            <h1> Online </h1>
                            <h3>
                                Visit the Starbucks Careers website to search and apply for current job openings.
                            </h3>
                        </div>

                        <div className='careers-fifth-content-box'>
                            <h1> In-store </h1>
                            <h3>
                                Visit your local Starbucks store and speak with a manager about current job openings and how to apply.
                            </h3>
                        </div>

                        <div className='careers-fifth-content-box'>
                            <h1> Recruiting Events </h1>
                            <h3>
                                Attend a recruiting event to learn more about job opportunities and speak directly with recruiters
                                and hiring managers.
                            </h3>
                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}
