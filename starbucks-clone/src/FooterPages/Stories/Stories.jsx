import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { nanoid } from 'nanoid'

import Slider from '../Stories/components/Slider'

import banner from './images/banner.jpg'
import womenmonth from './images/women-month.jpg'
import destination from './images/destinations.png'
import barista from './images/barista.jpg'

import './Stories.css'

import articlesData from '../Service/articlesData'

export default function Stories() {

    const articleRef = React.useRef(null)

    const [sliderData] = React.useState([articlesData])

    const [navToggled, setNavToggled] = React.useState(false)

    // Toggling Nav Burger
    function navToggledFunction() {
        setNavToggled(toggle => !toggle)
    }

    // Scroll to Element (Button Banner)
    function scrollToElement() {
        articleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const sliderElement = sliderData.map(data => {
        return <Slider
            key={nanoid()}
            data={data}
        />
    })

    return (
        <div>
            <Header
                toggleFunction={navToggledFunction}
                toggled={navToggled}
            />
            <div className='stories--banner-section' style={{ backgroundImage: `url(${banner})` }}>
                <div className='stories--banner-content'>
                    <h1> Our latest updates and stories. </h1>
                    <h3> Sip back and relax while browsing through the articles </h3>
                    <button onClick={scrollToElement}> See the rest </button>
                </div>
            </div>

            <main>
                <div className='column-container' ref={articleRef}>

                    <div className='column-wide' >
                        <div className='column-wide-image' style={{ backgroundImage: `url(${womenmonth})` }}> </div>
                        <div className='column-wide-content'>
                            <h2> Strong Like Coffee: Trailblazing Women of Starbucks Philippines </h2>
                            <p>
                                In celebration of Women's Month, we applaud the remarkable women who are breaking barriers and
                                leading the way in the coffee business.
                            </p>
                            <button> Read More </button>
                        </div>
                    </div>

                    <div className='column-tall-container'>
                        <div className='column-tall'>
                            <div className='column-tall-image' style={{ backgroundImage: `url(${destination})` }}></div>
                            <div className='column-tall-content'>
                                <h2> Your Next Coffee Destination: NEW Starbucks Philippines stores this 2022 </h2>
                                <p>
                                    As the world slowly opens up, this year is bringing many exciting things for Starbucks Philippines,
                                    including the launch of several new stores in the metro.
                                </p>
                                <button> Read More </button>
                            </div>
                        </div>

                        <div className='column-tall'>
                            <div className='column-tall-image' style={{ backgroundImage: `url(${barista})` }}></div>
                            <div className='column-tall-content'>
                                <h2> Meet John “Axl” Petrurbos– our dear barista in Cebu </h2>
                                <p>
                                    Axl shares about his Starbucks store partner journey and his stepping stones to success.
                                </p>
                                <button> Read More </button>
                            </div>
                        </div>
                    </div>

                </div>


                {sliderElement}


            </main>
            <Footer
                slides
            />
        </div>
    )
}
